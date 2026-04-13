import Link from "next/link";
import type { GameData } from "@/lib/games";
import type { Locale } from "@/i18n/messages";
import { t } from "@/i18n/messages";
import { CheckCircle2, Shield, Sparkles } from "lucide-react";
import EarthLottie from "@/components/ui/EarthLottie";

interface GameCardProps {
  game: GameData;
  locale: Locale;
}

export default function GameCard({ game, locale }: GameCardProps) {
  const prefix = locale === "en" ? "/en" : "";
  const showLottie = game.slug === "globetrot";

  return (
    <article className="card-duo group p-7 transition-shadow duration-300 hover:shadow-[0_1px_0_rgba(9,9,11,0.03),0_22px_70px_rgba(9,9,11,0.14)] sm:p-9">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="sticker inline-flex items-center gap-2 px-3 py-1 text-[11px] font-medium tracking-[0.18em] uppercase text-zinc-700 shadow-none">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-[var(--color-accent-dim)] text-[var(--color-accent-ink)]">
            <Sparkles size={14} />
          </span>
          {game.status === "released"
            ? t(locale, "game.available")
            : t(locale, "game.comingSoon")}
        </div>

        <Link
          href={`${prefix}${game.privacyPath}`}
          className="inline-flex items-center gap-2 text-[11px] font-semibold text-zinc-600 transition-colors duration-200 hover:text-zinc-950"
        >
          <Shield size={14} className="opacity-70" />
          {t(locale, "game.privacy")}
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="mb-6 overflow-hidden rounded-xl border border-zinc-950/10 bg-white">
            {showLottie ? (
              <EarthLottie className="flex w-full items-center justify-center bg-[var(--color-accent-dim)] py-6" />
            ) : (
              <img
                src={`/games/${game.slug}.svg`}
                alt=""
                className="h-44 w-full object-cover"
                loading="lazy"
              />
            )}
          </div>

          <h3 className="mb-2 text-2xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-3xl">
            {game.name}
          </h3>
          <p className="mb-5 text-sm font-medium text-zinc-600">
            {game.tagline}
          </p>

          <p className="mb-7 max-w-xl text-sm leading-relaxed text-zinc-600">
            {game.description}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {game.platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-950/15 bg-white px-5 py-2.5 text-xs font-semibold text-zinc-950 shadow-[0_1px_0_rgba(9,9,11,0.04)] transition-all duration-200 hover:bg-zinc-950 hover:text-white"
              >
                {platform.name === "ios" ? <AppleIcon /> : <PlayIcon />}
                {platform.label}
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-zinc-950/10 bg-[var(--color-accent-dim)] p-5">
          <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-accent-ink)]">
            {t(locale, "game.features")}
          </p>
          <ul className="space-y-2.5">
            {game.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm text-[var(--color-accent-ink)]"
              >
                <CheckCircle2 size={16} className="mt-0.5 opacity-70" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function AppleIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="opacity-90"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="opacity-90"
    >
      <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.19 0 .38.04.56.12l16 8c.54.27.87.82.87 1.38s-.34 1.11-.87 1.38l-16 8c-.18.08-.37.12-.56.12-.83 0-1.5-.67-1.5-1.5z" />
    </svg>
  );
}
