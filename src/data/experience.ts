import type { Lang } from '../i18n/ui';

/** Texte dans les deux langues. TypeScript refuse un objet auquel il manque une langue. */
type Text = Record<Lang, string>;

/* ------------------------------------------------------------------ */
/* Compétences : chacune est déclarée une seule fois, avec son groupe. */
/* ------------------------------------------------------------------ */

const skillGroups = {
  programming: { fr: 'Programmation', en: 'Programming' },
  frontend: { fr: 'Front-end', en: 'Front-end' },
  backend: { fr: 'Back-end', en: 'Back-end' },
  database: { fr: 'Base de données', en: 'Database' },
  data: { fr: 'Data & Cloud', en: 'Data & Cloud' },
  devops: { fr: 'DevOps - CI/CD', en: 'DevOps - CI/CD' },
  gamedev: { fr: 'Jeux vidéo', en: 'Game development' },
  tools: { fr: 'Outils et méthodes', en: 'Tools and methods' },
  languages: { fr: 'Langues', en: 'Languages' },
} satisfies Record<string, Text>;

type SkillGroupId = keyof typeof skillGroups;

type Skill = {
  /** Un nom de techno s'écrit pareil dans les deux langues ; sinon, un objet { fr, en }. */
  label: string | Text;
  group: SkillGroupId;
};

const skills = {
  typescript: { label: 'TypeScript', group: 'programming' },
  c: { label: 'C', group: 'programming' },
  cpp: { label: 'C++', group: 'programming' },
  csharp: { label: 'C#', group: 'programming' },
  java: { label: 'Java', group: 'programming' },
  python: { label: 'Python', group: 'programming' },
  angular: { label: 'Angular', group: 'frontend' },
  jsf: { label: 'JSF', group: 'frontend' },
  primefaces: { label: 'PrimeFaces', group: 'frontend' },
  plotly: { label: 'Plotly', group: 'frontend' },
  nodejs: { label: 'Node.js', group: 'backend' },
  springBoot: { label: 'Spring Boot', group: 'backend' },
  dotnet: { label: '.NET', group: 'backend' },
  entityFramework: { label: 'Entity Framework', group: 'backend' },
  nestjs: { label: 'NestJS', group: 'backend' },
  postgresql: { label: 'PostgreSQL', group: 'database' },
  sqlServer: { label: 'SQL Server', group: 'database' },
  databricks: { label: 'Databricks', group: 'data' },
  azureDataLake: { label: 'Azure Data Lake', group: 'data' },
  docker: { label: 'Docker', group: 'devops' },
  kubernetes: { label: 'Kubernetes', group: 'devops' },
  jenkins: { label: 'Jenkins', group: 'devops' },
  azureDevops: { label: 'Azure DevOps', group: 'devops' },
  unity: { label: 'Unity', group: 'gamedev' },
  unrealEngine: { label: 'Unreal Engine', group: 'gamedev' },
  git: { label: 'Git', group: 'tools' },
  linux: { label: 'Linux', group: 'tools' },
  scrum: { label: { fr: 'Méthode agile Scrum', en: 'Agile Scrum' }, group: 'tools' },
  french: { label: { fr: 'Français (langue maternelle)', en: 'French (native)' }, group: 'languages' },
  english: { label: { fr: 'Anglais', en: 'English' }, group: 'languages' },
  japanese: { label: { fr: 'Japonais (débutant)', en: 'Japanese (beginner)' }, group: 'languages' },
} satisfies Record<string, Skill>;

/** Identifiant d'une compétence : TypeScript n'accepte que les clés de `skills`. */
export type SkillId = keyof typeof skills;

/* ------------------------------------------------------------------ */
/* Parcours : chaque étape cite les compétences qu'elle a mobilisées.  */
/* ------------------------------------------------------------------ */

const placementKinds = {
  internship: { label: { fr: 'Stage', en: 'Internship' }, at: { fr: 'Stage chez', en: 'Internship at' } },
  workStudy: { label: { fr: 'Alternance', en: 'Work-study' }, at: { fr: 'Alternance chez', en: 'Work-study at' } },
} satisfies Record<string, { label: Text; at: Text }>;

/** Expérience en entreprise pendant une année : stage ou alternance. */
export type Placement = {
  /** Sert d'ancre dans la page (#stage-reliev) : unique, sans espace. */
  id: string;
  kind: keyof typeof placementKinds;
  company: string;
  period: Text;
  role: Text;
  missions: Text[];
  skills: SkillId[];
};

export type Step = {
  /** Sert d'ancre dans la page (#epitech-1) : unique, sans espace. */
  id: string;
  period: Text;
  title: Text;
  /** Libellé court utilisé dans la section Compétences (« 1re année »). */
  short: Text;
  place: Text;
  summary: Text;
  /** Projets cités sans lien : les dépôts Epitech ne sont plus accessibles. */
  projects?: Text[];
  skills: SkillId[];
  placements?: Placement[];
};

export const afterEpitech: Step[] = [
  {
    id: 'aujourd-hui',
    period: { fr: 'Aujourd’hui', en: 'Today' },
    title: { fr: 'En recherche d’emploi', en: 'Looking for a job' },
    short: { fr: 'Aujourd’hui', en: 'Today' },
    place: { fr: 'Développement full-stack', en: 'Full-stack development' },
    summary: {
      fr: 'Je recherche un CDI de développeur full-stack.',
      en: 'I am looking for a permanent full-stack developer position.',
    },
    skills: [],
  },
  {
    id: 'japon',
    period: { fr: '2025 – 2026', en: '2025 – 2026' },
    title: { fr: 'Un an au Japon en PVT', en: 'A working holiday year in Japan' },
    short: { fr: 'Japon', en: 'Japan' },
    place: { fr: 'Japon', en: 'Japan' },
    summary: {
      fr: 'Une année au Japon dans le cadre d’un Programme Vacances-Travail (PVT), après la fin de mes études.',
      en: 'A year in Japan on a Working Holiday visa, after graduating.',
    },
    skills: ['english', 'japanese'],
  },
];

/** Projet de fin d'études : il couvre trois années, il a donc sa propre carte. */
export const finalProject: Step = {
  id: 'nolosay',
  period: { fr: '2022 – 2025', en: '2022 – 2025' },
  title: { fr: 'Projet de fin d’études : NOLOSAY', en: 'Final-year project: NOLOSAY' },
  short: { fr: 'Projet NOLOSAY', en: 'NOLOSAY project' },
  place: { fr: 'Epitech, de la 3e à la 5e année', en: 'Epitech, 3rd to 5th year' },
  summary: {
    fr: 'Un projet pour rendre le français écrit plus accessible aux personnes malentendantes.',
    en: 'A project making written French more accessible to people who are hard of hearing.',
  },
  skills: ['nestjs'],
};

// Missions communes au stage puis à l'alternance chez Reliev.
const relievMissions: Text[] = [
  {
    fr: 'Montée en compétences sur Python appliqué au développement web.',
    en: 'Building up my Python skills for web development.',
  },
  {
    fr: 'Formation à la bibliothèque de visualisation de données Plotly.',
    en: 'Learning the Plotly data visualisation library.',
  },
  {
    fr: 'Développement et intégration de nouvelles fonctionnalités dans une application existante.',
    en: 'Developing and integrating new features into an existing application.',
  },
];

// Du plus récent au plus ancien, y compris les expériences en entreprise d'une même année.
export const epitechYears: Step[] = [
  {
    id: 'epitech-5',
    period: { fr: '2024 – 2025', en: '2024 – 2025' },
    title: { fr: '5e année : professionnalisation', en: '5th year: going professional' },
    short: { fr: '5e année', en: '5th year' },
    place: { fr: 'Epitech', en: 'Epitech' },
    summary: {
      fr: 'Finalisation du projet NOLOSAY et professionnalisation : alternance chez Reliev, puis stage de fin d’études chez Sopra Steria.',
      en: 'Completion of the NOLOSAY project and a professional focus: work-study at Reliev, then a final internship at Sopra Steria.',
    },
    skills: [],
    placements: [
      {
        id: 'stage-sopra-steria',
        kind: 'internship',
        company: 'Sopra Steria',
        period: { fr: 'Mars – août 2025 · 6 mois', en: 'March – August 2025 · 6 months' },
        role: { fr: 'Développement web', en: 'Web development' },
        missions: [
          {
            fr: 'Front-end : conception et évolution d’interfaces avec JSF et PrimeFaces.',
            en: 'Front-end: designing and evolving interfaces with JSF and PrimeFaces.',
          },
          {
            fr: 'Back-end : développement de fonctionnalités métier en Java avec Spring Boot.',
            en: 'Back-end: building business features in Java with Spring Boot.',
          },
          {
            fr: 'Base de données : manipulation et gestion des données avec PostgreSQL.',
            en: 'Database: handling and managing data with PostgreSQL.',
          },
          {
            fr: 'Data & Cloud : découverte et mise en pratique de Databricks et Azure Data Lake.',
            en: 'Data & Cloud: hands-on discovery of Databricks and Azure Data Lake.',
          },
          {
            fr: 'Conteneurisation : utilisation de Docker et Kubernetes.',
            en: 'Containers: working with Docker and Kubernetes.',
          },
        ],
        skills: [
          'jsf',
          'primefaces',
          'java',
          'springBoot',
          'postgresql',
          'sqlServer',
          'databricks',
          'azureDataLake',
          'docker',
          'kubernetes',
          'jenkins',
          'azureDevops',
        ],
      },
      {
        id: 'alternance-reliev',
        kind: 'workStudy',
        company: 'Reliev',
        period: { fr: '2024 – 2025 · 3 jours par semaine', en: '2024 – 2025 · 3 days a week' },
        role: { fr: 'Développement web', en: 'Web development' },
        missions: relievMissions,
        skills: ['python', 'plotly'],
      },
    ],
  },
  {
    id: 'epitech-4',
    period: { fr: '2023 – 2024', en: '2023 – 2024' },
    title: { fr: '4e année : un an en Corée du Sud', en: '4th year: a year in South Korea' },
    short: { fr: '4e année (Corée du Sud)', en: '4th year (South Korea)' },
    place: { fr: 'Keimyung University, Corée du Sud', en: 'Keimyung University, South Korea' },
    summary: {
      fr: 'Année d’études à l’étranger consacrée à la programmation de jeux vidéo avec Unity et Unreal Engine. Une année qui a mis à l’épreuve mes compétences linguistiques et mon autonomie.',
      en: 'A year studying abroad, focused on video game programming with Unity and Unreal Engine. A year that put my language skills and my independence to the test.',
    },
    skills: ['unity', 'unrealEngine', 'english'],
  },
  {
    id: 'epitech-3',
    period: { fr: '2022 – 2023', en: '2022 – 2023' },
    title: { fr: '3e année : premiers projets web', en: '3rd year: first web projects' },
    short: { fr: '3e année', en: '3rd year' },
    place: { fr: 'Epitech', en: 'Epitech' },
    summary: {
      fr: 'Lancement du projet de fin d’études NOLOSAY, mené jusqu’en 5e année, et premiers projets orientés web.',
      en: 'Start of the NOLOSAY final-year project, carried through to the 5th year, and first web-oriented projects.',
    },
    skills: [],
    placements: [
      {
        id: 'stage-reliev',
        kind: 'internship',
        company: 'Reliev',
        period: { fr: 'Mars – juillet 2023 · 5 mois', en: 'March – July 2023 · 5 months' },
        role: { fr: 'Développement web', en: 'Web development' },
        missions: relievMissions,
        skills: ['python', 'plotly'],
      },
    ],
  },
  {
    id: 'epitech-2',
    period: { fr: '2021 – 2022', en: '2021 – 2022' },
    title: { fr: '2e année : programmation orientée objet', en: '2nd year: object-oriented programming' },
    short: { fr: '2e année', en: '2nd year' },
    place: { fr: 'Epitech', en: 'Epitech' },
    summary: {
      fr: 'Programmation orientée objet en C++, avec des projets de jeux vidéo.',
      en: 'Object-oriented programming in C++, through video game projects.',
    },
    skills: ['cpp'],
    placements: [
      {
        id: 'stage-telelogos',
        kind: 'internship',
        company: 'Télélogos',
        period: { fr: 'Septembre – décembre 2021 · 4 mois', en: 'September – December 2021 · 4 months' },
        role: { fr: 'Développement web', en: 'Web development' },
        missions: [
          {
            fr: 'Conception et développement d’un outil interne de gestion des tickets, de la définition de l’architecture à sa mise en œuvre.',
            en: 'Designed and built an internal ticket management tool, from defining the architecture to delivery.',
          },
          {
            fr: 'Montée en compétences sur Angular et TypeScript à travers ce projet.',
            en: 'Built up my Angular and TypeScript skills through this project.',
          },
          {
            fr: 'Formation aux technologies C#, .NET et Entity Framework.',
            en: 'Trained in C#, .NET and Entity Framework.',
          },
          {
            fr: 'Découverte et application de la méthode agile Scrum au sein d’une équipe de développement.',
            en: 'Discovered and applied the Agile Scrum method within a development team.',
          },
        ],
        skills: ['angular', 'typescript', 'nodejs', 'csharp', 'dotnet', 'entityFramework', 'scrum'],
      },
    ],
  },
  {
    id: 'epitech-1',
    period: { fr: '2020 – 2021', en: '2020 – 2021' },
    title: { fr: '1re année : les fondamentaux', en: '1st year: the fundamentals' },
    short: { fr: '1re année', en: '1st year' },
    place: { fr: 'Epitech', en: 'Epitech' },
    summary: {
      fr: 'Bases du langage C et programmation UNIX, prise en main de Linux et de Git.',
      en: 'C fundamentals and UNIX programming, getting comfortable with Linux and Git.',
    },
    skills: ['c', 'linux', 'git'],
  },
];

/* ------------------------------------------------------------------ */
/* Fonctions utilisées par la page.                                    */
/* ------------------------------------------------------------------ */

export function text(value: string | Text, lang: Lang): string {
  return typeof value === 'string' ? value : value[lang];
}

export function skillLabel(id: SkillId, lang: Lang): string {
  return text(skills[id].label, lang);
}

export function placementLabel(placement: Placement, lang: Lang): string {
  return placementKinds[placement.kind].label[lang];
}

export const skillAnchor = (id: SkillId) => `competence-${id}`;

type Mention = { href: string; label: string };

/**
 * Compétences regroupées, chacune avec la liste des étapes qui la citent.
 * Calculé au build : il suffit d'ajouter un identifiant à une étape pour
 * que la mention apparaisse dans la section Compétences.
 */
export function skillsWithMentions(lang: Lang) {
  const mentions = new Map<SkillId, Mention[]>();
  const add = (id: SkillId, mention: Mention) => mentions.set(id, [...(mentions.get(id) ?? []), mention]);

  for (const step of [...afterEpitech, finalProject, ...epitechYears]) {
    for (const id of step.skills) {
      add(id, { href: `#${step.id}`, label: step.short[lang] });
    }
    for (const placement of step.placements ?? []) {
      const label = `${placementKinds[placement.kind].at[lang]} ${placement.company}`;
      for (const id of placement.skills) {
        add(id, { href: `#${placement.id}`, label });
      }
    }
  }

  return (Object.keys(skillGroups) as SkillGroupId[]).map((group) => ({
    label: skillGroups[group][lang],
    items: (Object.keys(skills) as SkillId[])
      .filter((id) => skills[id].group === group)
      .map((id) => ({ id, label: skillLabel(id, lang), mentions: mentions.get(id) ?? [] })),
  }));
}
