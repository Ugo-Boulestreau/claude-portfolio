export const languages = {
  fr: 'Français',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'fr';

// Une entrée par page : l'URL de chaque langue. Sert à la navigation,
// au sélecteur de langue et aux balises hreflang.
export const routes = {
  home: { fr: '/', en: '/en/' },
  projects: { fr: '/projets/', en: '/en/projects/' },
  experience: { fr: '/parcours/', en: '/en/experience/' },
  contact: { fr: '/contact/', en: '/en/contact/' },
} as const;

export type PageKey = keyof typeof routes;

export const ui = {
  fr: {
    'skip': 'Aller au contenu',
    'nav.label': 'Navigation principale',
    'nav.home': 'Accueil',
    'nav.projects': 'Projets',
    'nav.experience': 'Parcours',
    'nav.contact': 'Contact',
    'lang.switch': 'English version',
    'theme.toggle': 'Basculer entre thème sombre et thème clair',
    'footer.built': 'Site statique réalisé avec Astro.',

    'home.title': 'Développeur web',
    'home.description': 'Portfolio de développeur web : projets, parcours et contact.',
    'home.status': 'En recherche d’emploi',
    'home.role': 'Développeur web',
    'home.intro':
      'Diplômé d’Epitech, je conçois des sites et des applications web rapides et accessibles. Après une année passée au Japon, je cherche mon prochain poste.',
    'home.cta.projects': 'Voir mes projets',
    'home.cta.contact': 'Me contacter',
    'home.featured': 'Projets à la une',
    'home.allProjects': 'Tous les projets',

    'projects.title': 'Projets',
    'projects.description': 'Une sélection de projets web, avec leurs technologies et leur code source.',
    'projects.intro': 'Une sélection de projets, avec les technologies utilisées et le code source.',
    'projects.tech': 'Technologies',
    'projects.github': 'Code sur GitHub',
    'projects.demo': 'Voir la démo',

    'experience.title': 'Parcours',
    'experience.description': 'Formation, expériences et compétences.',
    'experience.intro': 'Ma formation, mes expériences et les outils avec lesquels je travaille.',
    'experience.timeline': 'Chronologie',
    'experience.skills': 'Compétences',

    'contact.title': 'Contact',
    'contact.description': 'Me contacter par e-mail, GitHub ou LinkedIn.',
    'contact.intro':
      'Je suis disponible pour un poste de développeur web. Le plus simple est de m’écrire par e-mail.',
    'contact.email': 'E-mail',
    'contact.cv': 'CV',
    'contact.cv.download': 'Télécharger mon CV (PDF)',
  },
  en: {
    'skip': 'Skip to content',
    'nav.label': 'Main navigation',
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'lang.switch': 'Version française',
    'theme.toggle': 'Switch between dark and light theme',
    'footer.built': 'Static site built with Astro.',

    'home.title': 'Web developer',
    'home.description': 'Web developer portfolio: projects, experience and contact.',
    'home.status': 'Open to work',
    'home.role': 'Web developer',
    'home.intro':
      'An Epitech graduate, I build fast and accessible websites and web applications. After a year spent in Japan, I am looking for my next role.',
    'home.cta.projects': 'See my projects',
    'home.cta.contact': 'Get in touch',
    'home.featured': 'Featured projects',
    'home.allProjects': 'All projects',

    'projects.title': 'Projects',
    'projects.description': 'A selection of web projects, with their tech stack and source code.',
    'projects.intro': 'A selection of projects, with the technologies used and the source code.',
    'projects.tech': 'Technologies',
    'projects.github': 'Code on GitHub',
    'projects.demo': 'View demo',

    'experience.title': 'Experience',
    'experience.description': 'Education, experience and skills.',
    'experience.intro': 'My education, my experience and the tools I work with.',
    'experience.timeline': 'Timeline',
    'experience.skills': 'Skills',

    'contact.title': 'Contact',
    'contact.description': 'Get in touch by email, GitHub or LinkedIn.',
    'contact.intro': 'I am available for a web developer position. Email is the easiest way to reach me.',
    'contact.email': 'Email',
    'contact.cv': 'Résumé',
    'contact.cv.download': 'Download my résumé (PDF)',
  },
} as const;

export type UiKey = keyof (typeof ui)[typeof defaultLang];
