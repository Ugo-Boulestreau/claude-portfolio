import type { Lang } from '../i18n/ui';

type Entry = {
  period: string;
  title: string;
  place: string;
  description: string;
};

type SkillGroup = {
  label: string;
  items: string[];
};

// TODO : contenu d'exemple, à remplacer par le vrai parcours (dates, intitulés, lieux).
export const timeline: Record<Lang, Entry[]> = {
  fr: [
    {
      period: 'Aujourd’hui',
      title: 'En recherche d’emploi',
      place: 'Développement web',
      description: 'À remplacer : type de poste recherché, localisation, disponibilité.',
    },
    {
      period: 'AAAA – AAAA',
      title: 'Une année au Japon',
      place: 'Japon',
      description: 'À remplacer : ce que vous y avez fait et ce que vous en retenez.',
    },
    {
      period: 'AAAA – AAAA',
      title: 'Diplôme Epitech',
      place: 'Epitech',
      description: 'À remplacer : spécialisation, projets marquants, apprentissage par projets.',
    },
  ],
  en: [
    {
      period: 'Today',
      title: 'Looking for a job',
      place: 'Web development',
      description: 'To replace: the kind of role you are looking for, location, availability.',
    },
    {
      period: 'YYYY – YYYY',
      title: 'A year in Japan',
      place: 'Japan',
      description: 'To replace: what you did there and what you took away from it.',
    },
    {
      period: 'YYYY – YYYY',
      title: 'Epitech degree',
      place: 'Epitech',
      description: 'To replace: specialisation, key projects, project-based learning.',
    },
  ],
};

// TODO : liste d'exemple, à ajuster.
export const skills: Record<Lang, SkillGroup[]> = {
  fr: [
    { label: 'Front-end', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript'] },
    { label: 'Back-end', items: ['Node.js', 'SQL'] },
    { label: 'Outils', items: ['Git', 'Linux'] },
    { label: 'Langues', items: ['Français', 'Anglais', 'Japonais (niveau à préciser)'] },
  ],
  en: [
    { label: 'Front-end', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript'] },
    { label: 'Back-end', items: ['Node.js', 'SQL'] },
    { label: 'Tools', items: ['Git', 'Linux'] },
    { label: 'Languages', items: ['French', 'English', 'Japanese (level to specify)'] },
  ],
};
