import GameCard from "@/components/ui/GameCard";
import { getAllGames } from "@/lib/games";
import { t, type Locale } from "@/i18n/messages";
import { Sparkles, Gamepad2 } from "lucide-react";
import NodinWordmarkHero from "@/components/ui/NodinWordmarkHero";

interface HomePageProps {
  locale: Locale;
}

export default function HomePage({ locale }: HomePageProps) {
  const games = getAllGames();
  const badge = t(locale, "home.hero.badge");

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="hero-heading"
        className="soft-noise relative isolate overflow-hidden bg-white px-6 py-20"
      >
        <div className="pointer-events-none absolute inset-0 -z-10">
          <img
            src="/hero.svg"
            alt=""
            className="h-full w-full object-cover opacity-[0.85]"
          />
        </div>

        <div className="mx-auto flex min-h-[56vh] max-w-4xl flex-col items-center justify-center text-center">
          {badge ? (
            <div className="sticker mb-7 inline-flex items-center gap-3 px-4 py-2 text-xs text-zinc-700">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-zinc-950/15 bg-[var(--color-accent-dim)] text-[var(--color-accent-ink)]">
                <Sparkles size={14} />
              </span>
              <span className="font-medium tracking-[0.14em] uppercase">
                {badge}
              </span>
            </div>
          ) : null}

          <h1 id="hero-heading" className="mb-6">
            <NodinWordmarkHero />
          </h1>

          <p className="mb-9 max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base">
            {t(locale, "home.hero.lede")}
          </p>

          <a
            href="#games"
            className="btn-duo group inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold"
          >
            <Gamepad2 size={16} className="opacity-90" />
            {t(locale, "home.hero.cta")}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-y-0.5"
              aria-hidden="true"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Games */}
      <section
        id="games"
        aria-labelledby="games-heading"
        className="mx-auto max-w-5xl px-6 py-[var(--padding-vertical)]"
      >
        <div className="mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-950">
            {t(locale, "home.games.kicker")}
          </p>
          <h2
            id="games-heading"
            className="text-2xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-3xl"
          >
            {t(locale, "home.games.title")}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-600">
            {t(locale, "home.games.lede")}
          </p>
        </div>

        <div className="space-y-8">
          {games.map((game) => (
            <GameCard key={game.slug} game={game} locale={locale} />
          ))}
        </div>
      </section>
    </>
  );
}

