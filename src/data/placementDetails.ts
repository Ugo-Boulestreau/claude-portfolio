import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import { findPlacement } from './experience';
import { languages, type Lang } from '../i18n/ui';

type Detail = CollectionEntry<'placements'>;

/** « fr/stage-reliev » → « stage-reliev » : l'identifiant du placement. */
const placementId = (entry: Detail) => entry.id.slice(entry.id.indexOf('/') + 1);

function detailsIn(lang: Lang) {
  return getCollection('placements', ({ id }) => id.startsWith(`${lang}/`));
}

/** Identifiants des stages qui ont une page de détail dans cette langue. */
export async function placementsWithDetail(lang: Lang): Promise<Set<string>> {
  return new Set((await detailsIn(lang)).map(placementId));
}

/**
 * Pages à générer, pour `getStaticPaths()`. Le build échoue avec un message clair si
 * un fichier ne correspond à aucun stage, ou s'il manque dans l'autre langue.
 */
export async function placementPaths(lang: Lang) {
  const all = await getCollection('placements');
  return (await detailsIn(lang)).map((entry) => {
    const id = placementId(entry);
    if (!findPlacement(id)) {
      throw new Error(`src/content/placements/${entry.id}.md : aucun placement « ${id} » dans src/data/experience.ts.`);
    }
    for (const l of Object.keys(languages) as Lang[]) {
      if (!all.some((e) => e.id === `${l}/${id}`)) {
        throw new Error(`src/content/placements/${l}/${id}.md manquant : le détail doit exister dans les deux langues.`);
      }
    }
    return { params: { placement: id } };
  });
}

/** Le détail d'un stage, et les projets personnels liés, dans la bonne langue. */
export async function getPlacementDetail(id: string, lang: Lang) {
  const entry = await getEntry('placements', `${lang}/${id}`);
  if (!entry) throw new Error(`src/content/placements/${lang}/${id}.md introuvable.`);

  const projects = await Promise.all(
    entry.data.projects.map(async (slug) => {
      const project = await getEntry('projects', `${lang}/${slug}`);
      if (!project) {
        throw new Error(`placements/${lang}/${id}.md cite le projet « ${slug} », absent de src/content/projects/${lang}/.`);
      }
      return project;
    }),
  );
  return { entry, projects };
}
