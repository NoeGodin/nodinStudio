"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { t, type Locale } from "@/i18n/messages";

export default function Header() {
  const pathname = usePathname();
  const locale: Locale = pathname.startsWith("/en") ? "en" : "fr";
  const prefix = locale === "en" ? "/en" : "";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-950/10 bg-white/80 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <Link
          href={prefix || "/"}
          className="group flex items-center gap-3 text-sm font-semibold tracking-tight text-zinc-950 transition-colors hover:text-zinc-700"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-zinc-950/15 bg-[var(--color-accent-dim)] text-[10px] font-semibold text-[var(--color-accent-ink)]">
            NS
          </span>
          <span className="tracking-[-0.02em]">NODIN Studio</span>
        </Link>

        <ul className="flex items-center gap-7 text-xs font-medium text-zinc-600">
          <li>
            <a
              href="#games"
              className="transition-colors duration-200 hover:text-zinc-950"
            >
              {t(locale, "nav.games")}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="transition-colors duration-200 hover:text-zinc-950"
            >
              {t(locale, "nav.contact")}
            </a>
          </li>
          <li className="hidden sm:block">
            <Link
              href={locale === "en" ? "/" : "/en"}
              className="inline-flex items-center gap-1 rounded-full border border-zinc-950/10 bg-[var(--color-accent-dim)] px-3 py-1 text-[11px] font-semibold text-[var(--color-accent-ink)] transition-colors hover:bg-[rgba(88,204,2,0.22)]"
            >
              {t(locale, "nav.langSwitch")}
              <ArrowUpRight size={14} className="opacity-60" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
