import { defineConfig } from 'astro/config';

export default defineConfig({
  // Hébergement sur GitHub Pages : https://ugo-boulestreau.github.io/my-portfolio/
  // `site` donne les URL complètes (canonique, hreflang, Open Graph) ; `base` est le sous-dossier
  // du dépôt, ajouté devant chaque lien interne par pagePath() et assetPath().
  site: 'https://ugo-boulestreau.github.io',
  base: '/my-portfolio',
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: { prefixDefaultLocale: false },
  },
});
