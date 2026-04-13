interface GameData {
  readonly slug: string;
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly features: readonly string[];
  readonly platforms: readonly Platform[];
  readonly status: "released" | "coming-soon";
  readonly privacyPath: string;
  readonly privacyPolicy?: PrivacyPolicy;
}

interface Platform {
  readonly name: string;
  readonly label: string;
  readonly url: string;
}

type PrivacyBlock =
  | {
      readonly type: "paragraph";
      readonly text: string;
    }
  | {
      readonly type: "list";
      readonly items: readonly string[];
    };

interface PrivacyPolicySection {
  readonly title: string;
  readonly blocks: readonly PrivacyBlock[];
}

interface PrivacyPolicy {
  readonly lastUpdated: string;
  readonly sections: readonly PrivacyPolicySection[];
}

const GAMES: readonly GameData[] = [
  {
    slug: "globetrot",
    name: "GlobeTrot",
    tagline: "Test your knowledge of the world",
    description:
      "A geography quiz game that challenges you to identify countries, capitals, and flags from around the globe.",
    features: [
      "Travel Mode -- rapid-fire geography challenges",
      "Campaign Mode -- progress through regions and unlock wonders",
      "Coins & Wonders -- earn rewards and build your collection",
      "Country, capital, and flag recognition",
    ],
    platforms: [
      {
        name: "ios",
        label: "App Store",
        url: "#",
      },
      {
        name: "android",
        label: "Google Play",
        url: "#",
      },
    ],
    status: "released",
    privacyPath: "/privacy/globetrot",
    privacyPolicy: {
      lastUpdated: "April 2026",
      sections: [
        {
          title: "Overview",
          blocks: [
            {
              type: "paragraph",
              text: "GlobeTrot is a geography quiz game developed by NODIN Studio. This policy describes what data the app collects, how it is used, and your choices regarding that data.",
            },
          ],
        },
        {
          title: "Data We Collect",
          blocks: [
            {
              type: "paragraph",
              text: "GlobeTrot collects the following data:",
            },
            {
              type: "list",
              items: [
                "Game progress — your campaign advancement, scores, unlocked regions, and completed challenges.",
                "Coins and Wonders — in-game currency and collectible items earned through gameplay.",
                "Device language — used to display the app in your preferred language.",
              ],
            },
          ],
        },
        {
          title: "Cloud Save",
          blocks: [
            {
              type: "paragraph",
              text: "Game progress may be synced using Apple Game Center on iOS and Google Play Games on Android (depending on your device and settings). These services are managed by Apple and Google respectively. No separate account is required to use GlobeTrot — your platform account handles authentication and cloud saves.",
            },
          ],
        },
        {
          title: "Third-Party Data Sharing",
          blocks: [
            {
              type: "paragraph",
              text: "We do not sell your personal data. Game data synced through Apple Game Center or Google Play Games is governed by the respective platform policies.",
            },
          ],
        },
        {
          title: "No Account Required",
          blocks: [
            {
              type: "paragraph",
              text: "GlobeTrot does not require you to create an account. You do not need to provide an email address, name, or other personal information to play.",
            },
          ],
        },
        {
          title: "Children's Privacy",
          blocks: [
            {
              type: "paragraph",
              text: "GlobeTrot does not knowingly collect personal information from children under 13. The app does not require personal data to function.",
            },
          ],
        },
        {
          title: "Changes to This Policy",
          blocks: [
            {
              type: "paragraph",
              text: "We may update this policy from time to time. Changes will be reflected on this page with an updated revision date.",
            },
          ],
        },
      ],
    },
  },
] as const;

function getGameBySlug(slug: string): GameData | undefined {
  return GAMES.find((game) => game.slug === slug);
}

function getAllGames(): readonly GameData[] {
  return GAMES;
}

export type { GameData, Platform };
export { GAMES, getGameBySlug, getAllGames };
