import { defineConfig } from 'astro/config';

export default defineConfig({
  // À renseigner une fois l'hébergement choisi (URL canonique, Open Graph, sitemap).
  // site: 'https://example.com',
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: { prefixDefaultLocale: false },
  },
});
