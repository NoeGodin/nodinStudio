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
    "Notre premier jeu, GlobeTrot, transforme la géographie en jeu de découverte. On est une petite équipe, mais chaque détail est travaillé.",
  "home.about.p3":
    "On ne fait que commencer. Plus de jeux, plus d’univers, plus de raisons de sourire en apprenant.",

  "game.available": "Disponible",
  "game.comingSoon": "Bientôt",
  "game.features": "Features",
  "game.privacy": "Politique de confidentialité",

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

