export type Locale = "fr" | "en";

type Messages = Record<string, string>;

const fr: Messages = {
  "nav.games": "Jeux",
  "nav.about": "À propos",
  "nav.contact": "Contact",
  "nav.langSwitch": "EN",

  "home.hero.badge": "",
  "home.hero.title": "Petits jeux.",
  "home.hero.subtitle": "Design clean. Un peu nerd.",
  "home.hero.lede": "",
  "home.hero.cta": "Voir les jeux",

  "home.games.kicker": "Nos jeux",
  "home.games.title": "Ce qu’on construit",
  "home.games.lede": "",

  "home.about.kicker": "À propos",
  "home.about.title": "Petit studio,\nobsession du détail",
  "home.about.p1":
    "NODIN Studio est un studio indépendant. On aime les jeux courts, fins, que tu ouvres cinq minutes… et qui te gardent vingt.",
  "home.about.p2":
    "GlobeTrot transforme la géographie en jeu de découverte. WBY crée de vraies conversations à travers des questions profondes. Petite équipe, chaque détail est travaillé.",
  "home.about.p3":
    "On ne fait que commencer. Plus de jeux, plus d’univers, plus de raisons de se connecter.",

  "game.available": "Disponible",
  "game.comingSoon": "Bientôt",
  "game.features": "Features",
  "game.privacy": "Politique de confidentialité",
  "game.learnMore": "Découvrir",
  "game.back": "Retour à l'accueil",
  "game.overviewKicker": "Le jeu",
  "game.featuresKicker": "Ce qu'on y trouve",
  "game.platformsKicker": "Disponible sur",
  "game.modes": "Modes de jeu",

  "footer.policies": "Politiques",
  "footer.contact": "Contact",
  "footer.tagline": "",
};

const en: Messages = {
  "nav.games": "Games",
  "nav.about": "About",
  "nav.contact": "Contact",
  "nav.langSwitch": "FR",

  "home.hero.badge": "",
  "home.hero.title": "Small games.",
  "home.hero.subtitle": "Clean design. A little nerdy.",
  "home.hero.lede": "",
  "home.hero.cta": "Browse games",

  "home.games.kicker": "Our games",
  "home.games.title": "What we're building",
  "home.games.lede": "",

  "home.about.kicker": "About",
  "home.about.title": "Small studio,\ndetail-obsessed",
  "home.about.p1": "We’re just getting started.",
  "home.about.p2": "",
  "home.about.p3": "",

  "game.available": "Available",
  "game.comingSoon": "Coming soon",
  "game.features": "Features",
  "game.privacy": "Privacy policy",
  "game.learnMore": "Discover",
  "game.back": "Back to home",
  "game.overviewKicker": "The game",
  "game.featuresKicker": "What's inside",
  "game.platformsKicker": "Available on",
  "game.modes": "Game modes",

  "footer.policies": "Policies",
  "footer.contact": "Contact",
  "footer.tagline": "",
};

const MESSAGES_BY_LOCALE: Record<Locale, Messages> = { fr, en };

export function getMessages(locale: Locale): Messages {
  return MESSAGES_BY_LOCALE[locale];
}

export function t(locale: Locale, key: string): string {
  const messages = getMessages(locale);
  return messages[key] ?? key;
}

