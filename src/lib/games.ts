interface GameTheme {
  readonly accent: string;
  readonly accentDim: string;
  readonly accentInk: string;
}

interface GameData {
  readonly slug: string;
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly features: readonly string[];
  readonly platforms: readonly Platform[];
  readonly status: "released" | "coming-soon";
  readonly privacyPath: string;
  readonly presentationImage?: string;
  readonly theme?: GameTheme;
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
    presentationImage: "/games/globetrot_presentation.png",
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
  {
    slug: "wby",
    name: "WBY",
    tagline: "Des questions qui créent de vraies conversations",
    description:
      "Un jeu de cartes de questions profondes pour mieux se connaître. Chaque thème t'emmène dans un territoire différent — de l'introspection à la connexion, du deuil amoureux à la première rencontre.",
    features: [
      "Thème Date — briser la glace autrement",
      "Thème Couple — aller plus loin ensemble",
      "Thème Famille — ce qu'on n'ose pas dire",
      "Thème Breakup — faire le point",
      "Thème Self-réflexion — se connaître soi-même",
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
    status: "coming-soon",
    privacyPath: "/privacy/wby",
    theme: {
      accent: "#002FA7",
      accentDim: "#E2EAFF",
      accentInk: "#001E6E",
    },
    privacyPolicy: {
      lastUpdated: "April 2026",
      sections: [
        {
          title: "Overview",
          blocks: [
            {
              type: "paragraph",
              text: "WBY is a deep-conversation card game developed by NODIN Studio. WBY does not collect, store, or transmit any personal data. This policy explains what that means in practice.",
            },
          ],
        },
        {
          title: "No Data Collected",
          blocks: [
            {
              type: "paragraph",
              text: "WBY collects no personal information whatsoever. No account is required. No name, email address, location, or device identifier is collected or sent to any server. Questions and answers exchanged during gameplay exist only between the players in the room — they are never recorded or transmitted.",
            },
          ],
        },
        {
          title: "In-App Purchases",
          blocks: [
            {
              type: "paragraph",
              text: "Expansion packs are available as in-app purchases processed entirely by Apple App Store or Google Play. NODIN Studio does not collect or store any payment information. All billing is handled by your platform account under Apple's and Google's respective privacy policies.",
            },
          ],
        },
        {
          title: "No Third-Party Analytics",
          blocks: [
            {
              type: "paragraph",
              text: "WBY does not include any analytics SDK, advertising network, or tracking library. No usage data is shared with third parties.",
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

const HIDDEN_SLUGS = new Set(["wby"]);

function getAllGames(): readonly GameData[] {
  return GAMES.filter((game) => !HIDDEN_SLUGS.has(game.slug));
}

export type { GameData, GameTheme, Platform };
export { GAMES, getGameBySlug, getAllGames };
