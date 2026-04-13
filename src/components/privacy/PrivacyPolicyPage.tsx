import Link from "next/link";
import type { GameData } from "@/lib/games";
import PrivacySection from "@/components/ui/PrivacySection";
import { t, type Locale } from "@/i18n/messages";

interface PrivacyPolicyPageProps {
  game: GameData;
  locale?: Locale;
}

export default function PrivacyPolicyPage({
  game,
  locale = "fr",
}: PrivacyPolicyPageProps) {
  const policy = game.privacyPolicy;
  const prefix = locale === "en" ? "/en" : "";

  return (
    <div className="mx-auto max-w-2xl px-6 pb-24 pt-32">
      <Link
        href={prefix || "/"}
        className="mb-10 inline-flex items-center gap-2 text-xs font-medium text-zinc-700 transition-colors duration-200 hover:text-zinc-950"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to home
      </Link>

      <header className="mb-12">
        <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-zinc-950/10 bg-[var(--color-accent-dim)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-ink)]">
          {t(locale, "game.privacy")}
        </p>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
          {game.name}
        </h1>
        <p className="text-sm text-zinc-700">
          {policy?.lastUpdated ? `Last updated: ${policy.lastUpdated}` : null}
        </p>
      </header>

      {!policy ? (
        <PrivacySection title="Status">
          <p>
            Privacy policy for {game.name} is not published yet.
          </p>
        </PrivacySection>
      ) : (
        <>
          {policy.sections.map((section) => (
            <PrivacySection key={section.title} title={section.title}>
              {section.blocks.map((block, idx) => {
                if (block.type === "paragraph") {
                  return <p key={`${section.title}-p-${idx}`}>{block.text}</p>;
                }

                return (
                  <ul
                    key={`${section.title}-l-${idx}`}
                    className="list-inside space-y-2 pl-1"
                  >
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              })}
            </PrivacySection>
          ))}
        </>
      )}
    </div>
  );
}

