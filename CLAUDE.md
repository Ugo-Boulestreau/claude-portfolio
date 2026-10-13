# Portfolio développeur web

Portfolio personnel bilingue (français / anglais) d'un développeur web diplômé d'Epitech,
ayant passé un an au Japon et en recherche d'emploi. Le site sert de vitrine pour les recruteurs.

## Choix techniques

- **Astro**, sortie 100 % statique. Pas de backend, pas de formulaire côté serveur.
- **CSS simple** : variables dans `src/styles/global.css`, styles *scoped* dans les composants.
  Pas de Tailwind, pas de préprocesseur, pas de framework UI (React, Vue…).
- **Aucune dépendance** hors `astro`. Demander avant d'en ajouter une.
- **JavaScript client minimal** : uniquement le bouton de thème.
- **Polices système** : aucune police externe.
- **Hébergement non choisi.** `site` est commenté dans `astro.config.mjs` ; tant qu'il l'est,
  il n'y a ni URL canonique ni sitemap. À faire au moment du choix : renseigner `site`
  (et `base` si besoin), puis ajouter `@astrojs/sitemap`.

## Style

Sobre et moderne. Thème sombre par défaut, thème clair via le bouton de l'en-tête
(`data-theme` sur `<html>`, choix mémorisé dans `localStorage`). Toute couleur passe par
les variables CSS, définies pour les deux thèmes.

## Accessibilité et performance

- HTML sémantique, un seul `h1` par page, hiérarchie de titres sans saut.
- Contrastes AA dans les deux thèmes, focus visible, lien d'évitement, `prefers-reduced-motion`.
- `alt` obligatoire sur les captures (`coverAlt`, validé par le schéma).
- Images via `astro:assets` (`<Image>`), avec dimensions et `loading="lazy"`.

## Bilingue

- Français par défaut à la racine, anglais sous `/en/`.
- Les URL sont traduites ; la correspondance est dans `routes` (`src/i18n/ui.ts`).

  | Page     | FR           | EN                |
  | -------- | ------------ | ----------------- |
  | Accueil  | `/`          | `/en/`            |
  | Projets  | `/projets/`  | `/en/projects/`   |
  | Parcours | `/parcours/` | `/en/experience/` |
  | Contact  | `/contact/`  | `/en/contact/`    |

- Textes d'interface : `src/i18n/ui.ts`, toujours dans les deux langues.
- Ne jamais écrire une URL interne en dur : utiliser `pagePath()` / `assetPath()` de `src/i18n/utils.ts`.
- Tout contenu ajouté doit exister en français et en anglais.

## Structure

```
src/
  pages/              fichiers de route, simples enveloppes (fr à la racine, en/ pour l'anglais)
  components/pages/   contenu réel de chaque page, paramétré par `lang`
  components/         Header, Footer, ThemeToggle, ProjectCard
  layouts/Base.astro  <head>, en-tête, pied de page
  i18n/               dictionnaires, routes, utilitaires
  data/site.ts        nom, e-mail, liens, CV
  data/experience.ts  chronologie et compétences (fr + en)
  content/projects/   un Markdown par projet et par langue (fr/, en/)
  assets/projects/    captures d'écran
  content.config.ts   schéma de la collection `projects`
```

## Ajouter un projet

1. Placer la capture (16:9) dans `src/assets/projects/`.
2. Créer `src/content/projects/fr/<slug>.md` et `src/content/projects/en/<slug>.md` avec le même slug.
3. Remplir le frontmatter : `title`, `description`, `tech`, `github`, `cover`, `coverAlt`,
   et en option `demo`, `featured` (affiché sur l'accueil), `order` (tri croissant).

## Commandes

- `npm run dev` : serveur de développement (http://localhost:4321)
- `npm run build` : génère le site dans `dist/`
- `npm run preview` : sert le build localement

## État du contenu

Le nom, l'e-mail, les liens, la chronologie et les trois projets sont des **exemples à remplacer**
(marqués `TODO` ou « À remplacer »). Ne pas inventer d'informations sur le parcours : demander.
