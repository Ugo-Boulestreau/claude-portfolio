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
  | Parcours et compétences | `/parcours/` | `/en/experience/` |
  | Contact  | `/contact/`  | `/en/contact/`    |

- Textes d'interface : `src/i18n/ui.ts`, toujours dans les deux langues.
- Ne jamais écrire une URL interne en dur : utiliser `pagePath()` / `assetPath()` de `src/i18n/utils.ts`.
- Tout contenu ajouté doit exister en français et en anglais.

## Structure

```
src/
  pages/              fichiers de route, simples enveloppes (fr à la racine, en/ pour l'anglais)
  components/pages/   contenu réel de chaque page, paramétré par `lang`
  components/         Header, Footer, ThemeToggle, ProjectCard, ExperienceStep, SkillTags
  layouts/Base.astro  <head>, en-tête, pied de page
  i18n/               dictionnaires, routes, utilitaires
  data/site.ts        nom, e-mail, liens, CV
  data/experience.ts  chronologie et compétences (fr + en)
  data/details.ts     lien entre les étapes / stages et leurs pages de détail
  content/projects/   un Markdown par projet et par langue (fr/, en/)
  content/details/    page de détail d'une étape ou d'un stage : un Markdown par langue (fr/, en/), images/
  assets/projects/    captures d'écran
  content.config.ts   schémas des collections `projects` et `details`
```

## Ajouter un projet

1. Placer la capture (16:9) dans `src/assets/projects/`.
2. Créer `src/content/projects/fr/<slug>.md` et `src/content/projects/en/<slug>.md` avec le même slug.
3. Remplir le frontmatter : `title`, `description`, `tech`, `github`, `cover`, `coverAlt`,
   et en option `demo`, `featured` (affiché sur l'accueil), `order` (tri croissant).

## Page Parcours et compétences

Tout est dans `src/data/experience.ts`, textes en `{ fr, en }` côte à côte.

- `skills` déclare chaque compétence une fois (identifiant + groupe).
- Les étapes (`afterEpitech`, `finalProject`, `epitechYears`, du plus récent au plus ancien) et leurs
  `placements` (stage ou alternance, champ `kind`) citent les compétences par identifiant.
- La section Compétences est en haut de la page et n’affiche que des pastilles (`SkillTags` avec `linkTo="usage"`). Chacune
  renvoie vers l’étape la plus récente qui la cite, calculée par `skillUsage()` ; une bulle en CSS pur
  (« Utilisé dans : … » en français, « Last used: … » en anglais) l’annonce après 1 s de survol ou au focus. Ne jamais écrire ces liens à la main.
- Dans les étapes, les pastilles (`linkTo="skill"`, défaut) renvoient vers la section Compétences.
- Chaque `id` d'étape ou de placement sert d'ancre et doit être unique.
- Ne rattacher une compétence à une étape que si l'utilisateur l'a confirmé.

## Pages de détail (étapes et stages)

- Une étape du parcours (`japon`…) ou un stage (`stage-reliev`…) peut avoir une page de détail :
  `/parcours/<id>/` et `/en/experience/<id>/`, où `<id>` est son `id` dans `experience.ts`.
  Routes : `src/pages/parcours/[detail].astro` et `src/pages/en/experience/[detail].astro`,
  contenu : `components/pages/DetailPage.astro` ; `findDetailTarget()` dit s'il s'agit d'une étape ou d'un stage.
- La page n'existe que si `src/content/details/fr/<id>.md` **et** `en/<id>.md` existent ; la carte affiche
  alors « Voir le détail ». Le corps du Markdown est le texte détaillé ; les données de base (dates,
  missions ou résumé, compétences) restent dans `experience.ts`.
- Images du texte dans `src/content/details/images/`, insérées en Markdown (`![alt](../images/x.svg)`) ;
  une ligne en italique juste en dessous sert de légende. Données confidentielles : maquettes fictives uniquement.
- `projects: [slug]` dans le frontmatter : projets personnels liés, choisis à la main.
- Le build échoue si un fichier ne correspond à aucune étape ni aucun stage, manque dans une langue,
  ou cite un projet absent.

## Commandes

- `npm run dev` : serveur de développement (http://localhost:4321)
- `npm run build` : génère le site dans `dist/`
- `npm run preview` : sert le build localement

## État du contenu

Coordonnées, CV, parcours et pages de détail sont réels. La page Projets est **en construction** :
aucun projet pour l'instant, elle affiche un message et l'accueil renvoie vers le parcours ; tout
redevient normal dès le premier projet ajouté (voir « Ajouter un projet »). Stages confidentiels (Reliev, Sopra Steria) :
uniquement des informations publiques sur l'entreprise, et des illustrations fictives ou génériques. Ne pas inventer d'informations sur le parcours : demander.
