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
    'nav.experience': 'Parcours et compétences',
    'nav.contact': 'Contact',
    'lang.switch': 'English version',
    'theme.toggle': 'Basculer entre thème sombre et thème clair',
    'footer.built': 'Site statique réalisé avec Astro.',

    'home.title': 'Développeur full-stack',
    'home.description': 'Portfolio de développeur full-stack : projets, parcours et contact.',
    'home.status': 'En recherche d’emploi',
    'home.role': 'Développeur full-stack',
    'home.intro':
      'Diplômé d’Epitech, je développe des applications web, du front-end au back-end. Après une année passée au Japon, je recherche un CDI de développeur full-stack.',
    'home.cta.projects': 'Voir mes projets',
    'home.cta.contact': 'Me contacter',
    'home.featured': 'Projets à la une',
    'home.allProjects': 'Tous les projets',
    'home.about.title': 'À propos de ce portfolio',
    'home.about.p1':
      'Ce portfolio présente mes compétences et mon parcours, mais il a aussi un second objectif : montrer mon apprentissage du travail avec l’intelligence artificielle. Et je tiens à être totalement transparent à ce sujet.',
    'home.about.p2':
      'Je suis conscient des nouveaux défis du numérique et de la puissance des outils modernes, et je me forme en conséquence. Ce site a été codé avec l’aide de Claude Code, l’assistant de programmation d’Anthropic, que j’ai piloté : les choix, les contenus, la relecture et la validation de chaque étape.',
    'home.about.p3':
      'Astro est une technologie nouvelle pour moi. Aurais-je pu faire la même chose seul, en si peu de temps ? Probablement pas, et je ne comprends d’ailleurs pas encore l’intégralité du code. Mais c’est tout l’objet de ce projet : apprendre et prendre en main ces outils, en demandant à Claude d’expliquer ses choix au fil du projet.',

    'projects.title': 'Projets',
    'projects.description': 'Une sélection de projets web, avec leurs technologies et leur code source.',
    'projects.intro': 'Une sélection de projets, avec les technologies utilisées et le code source.',
    'projects.tech': 'Technologies',
    'projects.github': 'Code sur GitHub',
    'projects.demo': 'Voir la démo',

    'experience.title': 'Parcours et compétences',
    'experience.description': 'Compétences, formation Epitech année par année et stages.',
    'experience.intro':
      'Mes compétences, puis mon parcours à Epitech année par année et les stages où je les ai mises en pratique.',
    'experience.after': 'Depuis Epitech',
    'experience.epitech': 'Epitech, 2020 – 2025',
    'experience.projects': 'Projets',
    'experience.skillsUsed': 'Compétences mobilisées',
    'experience.skills': 'Compétences',
    'experience.skillsIntro': 'Chaque compétence renvoie à l’étape la plus récente où je l’ai pratiquée.',
    'experience.lastUsed': 'Utilisé dans :',

    'detail.more': 'Voir le détail',
    'detail.back': 'Retour au parcours',
    'detail.inBrief': 'En bref',
    'detail.project': 'Projet personnel lié',
    'detail.projects': 'Projets personnels liés',

    'contact.title': 'Contact',
    'contact.description': 'Me contacter par e-mail, GitHub ou LinkedIn.',
    'contact.intro':
      'Je suis disponible pour un poste de développeur web. Le plus simple est de m’écrire par e-mail.',
    'contact.email': 'E-mail',
    'contact.cv': 'CV',
    'contact.cv.download': 'Télécharger mon CV (PDF)',
    'contact.tel': 'Téléphone',
  },
  en: {
    'skip': 'Skip to content',
    'nav.label': 'Main navigation',
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience & skills',
    'nav.contact': 'Contact',
    'lang.switch': 'Version française',
    'theme.toggle': 'Switch between dark and light theme',
    'footer.built': 'Static site built with Astro.',

    'home.title': 'Full-stack developer',
    'home.description': 'Full-stack developer portfolio: projects, experience and contact.',
    'home.status': 'Open to work',
    'home.role': 'Full-stack developer',
    'home.intro':
      'An Epitech graduate, I develop web applications, from front-end to back-end. After a year spent in Japan, I am looking for a permanent full-stack developer position.',
    'home.cta.projects': 'See my projects',
    'home.cta.contact': 'Get in touch',
    'home.featured': 'Featured projects',
    'home.allProjects': 'All projects',
    'home.about.title': 'About this portfolio',
    'home.about.p1':
      'This portfolio presents my skills and background, but it also has a second goal: showing how I am learning to work with artificial intelligence. And I want to be fully transparent about it.',
    'home.about.p2':
      'I am aware of the new challenges of the digital world and of how powerful modern tools have become, and I am training accordingly. This site was coded with the help of Claude Code, Anthropic’s coding assistant, which I steered: the choices, the content, and the review and approval of every step.',
    'home.about.p3':
      'Astro is a new technology for me. Could I have built the same thing on my own, this quickly? Probably not, and I don’t yet understand all of the code. But that is the whole point of this project: learning and getting to grips with these tools, by asking Claude to explain its choices along the way.',

    'projects.title': 'Projects',
    'projects.description': 'A selection of web projects, with their tech stack and source code.',
    'projects.intro': 'A selection of projects, with the technologies used and the source code.',
    'projects.tech': 'Technologies',
    'projects.github': 'Code on GitHub',
    'projects.demo': 'View demo',

    'experience.title': 'Experience & skills',
    'experience.description': 'Skills, Epitech education year by year and internships.',
    'experience.intro': 'My skills, then my Epitech education year by year and the internships where I put them into practice.',
    'experience.after': 'Since Epitech',
    'experience.epitech': 'Epitech, 2020 – 2025',
    'experience.projects': 'Projects',
    'experience.skillsUsed': 'Skills used',
    'experience.skills': 'Skills',
    'experience.skillsIntro': 'Each skill links to the most recent step where I practised it.',
    'experience.lastUsed': 'Last used:',

    'detail.more': 'Read more',
    'detail.back': 'Back to experience',
    'detail.inBrief': 'At a glance',
    'detail.project': 'Related personal project',
    'detail.projects': 'Related personal projects',

    'contact.title': 'Contact',
    'contact.description': 'Get in touch by email, GitHub or LinkedIn.',
    'contact.intro': 'I am available for a web developer position. Email is the easiest way to reach me.',
    'contact.email': 'Email',
    'contact.cv': 'Résumé',
    'contact.cv.download': 'Download my résumé (PDF)',
    'contact.tel': 'Phone',
  },
} as const;

export type UiKey = keyof (typeof ui)[typeof defaultLang];
