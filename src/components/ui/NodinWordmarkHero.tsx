"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function clamp01(v: number) {
  return Math.min(1, Math.max(0, v));
}

/**
 * Wordmark:
 * NODIN
 * STUDIO
 *
 * Scroll interaction:
 * As the wordmark approaches the viewport center, the "O" drops, bounces,
 * and settles into its slot.
 */
export default function NodinWordmarkHero() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const oSlotRef = useRef<HTMLSpanElement | null>(null);
  const [oLeft, setOLeft] = useState(0);
  const progress = useMotionValue(0);
  const lockedRef = useRef(false);

  const eased = useTransform(progress, (p) => 1 - Math.pow(1 - p, 3));
  const yRaw = useTransform(eased, (p) => (-160 * (1 - p)));
  const y = useSpring(yRaw, { stiffness: 260, damping: 14, mass: 0.7 });
  const rotateRaw = useTransform(eased, (p) => -10 * (1 - p));
  const rotate = useSpring(rotateRaw, { stiffness: 240, damping: 16, mass: 0.6 });
  const scaleRaw = useTransform(eased, (p) => 0.92 + 0.08 * p);
  const scale = useSpring(scaleRaw, { stiffness: 240, damping: 16, mass: 0.6 });
  const shadowY = useTransform(eased, (p) => 10 - 9 * p);
  const shadowBlur = useTransform(eased, (p) => 18 - 12 * p);
  const shadowAlpha = useTransform(eased, (p) => 0.18 - 0.10 * p);
  const shadow = useTransform(
    [shadowY, shadowBlur, shadowAlpha],
    ([sy, sb, sa]) => `drop-shadow(0px ${sy}px ${sb}px rgba(9,9,11,${sa}))`
  );

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const root = rootRef.current;
      if (!root) return;

      const rect = root.getBoundingClientRect();
      const viewportCenterY = window.innerHeight * 0.5;
      const elementCenterY = rect.top + rect.height * 0.5;
      const signed = elementCenterY - viewportCenterY; // + => below center, - => above center

      // Within range => progress 0..1
      const range = Math.min(520, window.innerHeight * 0.6);

      // Lock once we've reached center while scrolling down:
      // once the element center is at/above viewport center, keep progress at 1
      // so the "O" doesn't start moving back up as we continue scrolling.
      if (lockedRef.current) {
        // optional unlock if user scrolls back far enough up
        if (signed > range * 0.9) {
          lockedRef.current = false;
        } else {
          progress.set(1);
          return;
        }
      }

      if (signed <= 0) {
        lockedRef.current = true;
        progress.set(1);
        return;
      }

      const p = clamp01(1 - signed / range);
      progress.set(p);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useLayoutEffect(() => {
    const measure = () => {
      const root = rootRef.current;
      const slot = oSlotRef.current;
      if (!root || !slot) return;
      const rootRect = root.getBoundingClientRect();
      const slotRect = slot.getBoundingClientRect();
      // align the animated O over the slot box
      setOLeft(slotRect.left - rootRect.left);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <div ref={rootRef} className="relative inline-block">
      <div className="relative">
        <div className="text-[56px] font-semibold leading-[0.92] tracking-[-0.06em] text-zinc-950 sm:text-[84px] md:text-[96px]">
          <span className="relative inline-flex">
            <span>N</span>
            <span
              ref={oSlotRef}
              className="relative inline-block text-transparent"
              aria-hidden="true"
            >
              O
            </span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
          </span>
        </div>

        <div className="text-[56px] font-semibold leading-[0.92] tracking-[-0.06em] text-zinc-950 sm:text-[84px] md:text-[96px]">
          STUDIO
        </div>

        {/* Falling O */}
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute top-0 inline-block select-none text-[56px] font-semibold leading-[0.92] tracking-[-0.06em] text-[var(--color-accent-ink)] sm:text-[84px] md:text-[96px]"
          style={{
            left: oLeft,
            y,
            rotate,
            scale,
            filter: shadow,
          }}
        >
          O
        </motion.span>

        {/* Subtle slot outline as it settles */}
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute top-0 inline-block select-none text-[56px] font-semibold leading-[0.92] tracking-[-0.06em] text-zinc-950 sm:text-[84px] md:text-[96px]"
          style={{
            left: oLeft,
            opacity: useTransform(progress, (p) =>
              clamp01((p - 0.25) / 0.75) * 0.12
            ),
          }}
        >
          O
        </motion.span>
      </div>
    </div>
  );
}

