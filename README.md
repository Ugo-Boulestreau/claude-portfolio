# Portfolio d’Ugo Boulestreau

Portfolio bilingue (français / anglais) de développeur full-stack : parcours à Epitech, stages,
compétences et contact.

**Site en ligne : https://ugo-boulestreau.github.io/claude-portfolio/**

## Un projet construit avec Claude Code

Ce site a été codé avec l’aide de [Claude Code](https://claude.com/claude-code), l’assistant de
programmation d’Anthropic, en une semaine. Je l’ai piloté : les choix, les contenus, la relecture et la
validation de chaque étape. C’est avant tout un projet d’apprentissage : découvrir Astro et apprendre à
travailler avec un agent IA, en lui demandant d’expliquer ses choix au fil du projet.
L’historique des commits retrace cette démarche, étape par étape.

## Technologies

- [Astro](https://astro.build), en sortie 100 % statique : pas de serveur, pas de base de données
- TypeScript, en mode strict
- CSS natif : variables, styles limités à chaque composant, thème clair / sombre
- Aucune dépendance en dehors d’Astro

## Lancer le projet

Il faut Node.js 22.12 ou plus récent.

```bash
npm install
npm run dev       # serveur de développement sur http://localhost:4321/claude-portfolio/
npm run build     # génère le site dans dist/
npm run preview   # sert le site généré
```

Le site est publié sur GitHub Pages par le workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
à chaque push sur `main`.

## Comprendre le code

L’architecture du site est expliquée en détail dans **[ARCHITECTURE.md](ARCHITECTURE.md)** : les dossiers,
le parcours d’une page, le bilingue, les données du parcours, les pages de détail, le CSS et le thème.

[CLAUDE.md](CLAUDE.md) contient les règles du projet, relues par Claude Code à chaque session.

## Crédits

Photos de Daegu et de la Keimyung University : [Namoroka](https://commons.wikimedia.org/wiki/File:View_of_Dalseo-gu_in_Daegu_from_Daegu_Duryu_Park.JPG)
et [Tndus1108](https://commons.wikimedia.org/wiki/File:Keimyung_University_Main_Building.jpg),
sous licence [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/), via Wikimedia Commons.
