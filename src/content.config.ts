import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Un fichier Markdown par projet et par langue :
// src/content/projects/fr/<slug>.md et src/content/projects/en/<slug>.md
const projects = defineCollection({
  loader: glob({ pattern: '{fr,en}/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tech: z.array(z.string()).min(1),
      github: z.string().url(),
      demo: z.string().url().optional(),
      cover: image(),
      coverAlt: z.string().min(1),
      featured: z.boolean().default(false),
      order: z.number().default(100),
    }),
});

// Détail d'un stage ou d'une alternance : src/content/placements/fr/<id>.md et en/<id>.md.
// <id> est l'`id` du placement dans src/data/experience.ts ; le texte est le corps du fichier.
const placements = defineCollection({
  loader: glob({ pattern: '{fr,en}/*.md', base: './src/content/placements' }),
  schema: z.object({
    /** Slugs de projets personnels à mettre en avant (fichiers de src/content/projects/<langue>/). */
    projects: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, placements };
