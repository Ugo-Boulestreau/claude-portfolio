import { getCollection } from 'astro:content';
import type { Lang } from './ui';

/** Projets d'une langue, triés par `order`. */
export async function getProjects(lang: Lang) {
  const projects = await getCollection('projects', ({ id }) => id.startsWith(`${lang}/`));
  return projects.sort((a, b) => a.data.order - b.data.order);
}
