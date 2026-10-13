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

export const collections = { projects };
