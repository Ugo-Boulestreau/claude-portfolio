import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import { findDetailTarget } from './experience';
import { languages, type Lang } from '../i18n/ui';

type Detail = CollectionEntry<'details'>;

/** « fr/stage-reliev » → « stage-reliev » : l'identifiant de l'étape ou du stage. */
const targetId = (entry: Detail) => entry.id.slice(entry.id.indexOf('/') + 1);

function detailsIn(lang: Lang) {
  return getCollection('details', ({ id }) => id.startsWith(`${lang}/`));
}

/** Identifiants des étapes et stages qui ont une page de détail dans cette langue. */
export async function idsWithDetail(lang: Lang): Promise<Set<string>> {
  return new Set((await detailsIn(lang)).map(targetId));
}

/**
 * Pages à générer, pour `getStaticPaths()`. Le build échoue avec un message clair si
 * un fichier ne correspond à aucune étape ni aucun stage, ou s'il manque dans l'autre langue.
 */
export async function detailPaths(lang: Lang) {
  const all = await getCollection('details');
  return (await detailsIn(lang)).map((entry) => {
    const id = targetId(entry);
    if (!findDetailTarget(id)) {
      throw new Error(`src/content/details/${entry.id}.md : aucune étape ni aucun stage « ${id} » dans src/data/experience.ts.`);
    }
    for (const l of Object.keys(languages) as Lang[]) {
      if (!all.some((e) => e.id === `${l}/${id}`)) {
        throw new Error(`src/content/details/${l}/${id}.md manquant : le détail doit exister dans les deux langues.`);
      }
    }
    return { params: { detail: id } };
  });
}

/** Le détail d'une étape ou d'un stage, et les projets personnels liés, dans la bonne langue. */
export async function getDetail(id: string, lang: Lang) {
  const entry = await getEntry('details', `${lang}/${id}`);
  if (!entry) throw new Error(`src/content/details/${lang}/${id}.md introuvable.`);

  const projects = await Promise.all(
    entry.data.projects.map(async (slug) => {
      const project = await getEntry('projects', `${lang}/${slug}`);
      if (!project) {
        throw new Error(`details/${lang}/${id}.md cite le projet « ${slug} », absent de src/content/projects/${lang}/.`);
      }
      return project;
    }),
  );
  return { entry, projects };
}
