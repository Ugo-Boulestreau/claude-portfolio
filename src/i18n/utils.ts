import { routes, ui, type Lang, type PageKey, type UiKey } from './ui';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key];
}

/** URL d'une page dans une langue donnée, préfixée par le `base` d'Astro. */
export function pagePath(page: PageKey, lang: Lang): string {
  return `${base}${routes[page][lang]}`;
}

/** URL d'un fichier de public/, préfixée par le `base` d'Astro. */
export function assetPath(path: string): string {
  return `${base}${path}`;
}

export function otherLang(lang: Lang): Lang {
  return lang === 'fr' ? 'en' : 'fr';
}
