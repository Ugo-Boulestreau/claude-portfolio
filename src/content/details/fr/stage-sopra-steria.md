---
# Projets personnels à mettre en avant : noms de fichiers de src/content/projects/fr/, sans .md.
projects: []
---

## Contexte

Pour mon stage de fin d’études, j’ai rejoint Sopra Steria, une entreprise de services du numérique (ESN) née en 2014 de la fusion de Sopra et Steria. Acteur majeur de la Tech en Europe, le groupe compte environ 50 000 collaborateurs dans près de 30 pays.

Le logiciel et les données sur lesquels j’ai travaillé sont confidentiels : cette page reste donc volontairement générale, sans détail sur le client ni sur ses données.

## Ce que j’ai réalisé

J’ai travaillé sur un logiciel de facturation développé pour un grand client du secteur des transports. Il calcule la valeur des prestations fournies et prépare leur pré-facturation.

L’équipe travaillait en méthode Scrum, et l’application s’appuyait sur un ensemble de technologies large :

- **IHM** (interface homme-machine) : JSF et PrimeFaces ;
- **Couche métier** : Java avec Spring Boot ;
- **Gestion des dépendances et du build** : Maven ;
- **Conteneurisation et déploiement** : Docker, Kubernetes et Helm ;
- **Intégration continue (CI)** : Jenkins et Azure DevOps ;
- **Cloud Azure** : Databricks, Spark, Azure Data Lake et PostgreSQL.

J’ai surtout pratiqué Spring Boot et PrimeFaces ; les autres briques faisaient partie de l’environnement du projet, et je les ai côtoyées de plus loin.

### Mes débuts : formation et première fonctionnalité

Les premières semaines, je me suis formé en autonomie grâce aux formations internes de Sopra Steria : les valeurs et les bonnes pratiques de l’entreprise, puis une formation technique en Java et Spring. Ma première mission a ensuite été d’ajouter une toute petite fonctionnalité, pour me familiariser avec le code de l’application.

### Exemple de mission : ajouter une donnée dans l’IHM

L’une de mes missions consistait à ajouter une nouvelle donnée, affichée dans une colonne d’un tableau de l’IHM. La tâche n’est pas très complexe en soi, mais elle demande de bien comprendre l’architecture et le chemin des données, de la base jusqu’à l’écran.

L’application suit une **architecture trois tiers** : la couche de présentation ne lit jamais directement la base de données, les données traversent toutes les couches. Concrètement, j’ai :

1. **créé la donnée dans la base**, avec une requête SQL qui ajoute une nouvelle colonne, d’un type défini, à la table concernée ;
2. **adapté le DAO** (*Data Access Object*) lié à cette table. Ce patron de conception sépare l’accès aux données de la logique métier : il encapsule les échanges avec la base pour simplifier la manipulation des données ;
3. **adapté le DTO** (*Data Transfer Object*) et la correspondance entre le DAO et le DTO. Un DTO est un objet simple, qui ne contient que des données et en regroupe plusieurs champs, conçu pour circuler entre les couches : c’est lui qui transporte la nouvelle donnée vers la couche métier et l’IHM ;
4. **affiché la nouvelle donnée** dans la colonne du tableau de l’IHM.

Lors de ma première tentative, je n’avais pas une vision complète de ce flux : j’ai oublié d’adapter certaines couches, ce qui a provoqué des erreurs de compilation. Avec l’aide de l’équipe, j’ai repris le parcours des données en étudiant l’architecture, et j’ai correctement adapté toutes les couches.

### Autres missions

D’autres missions ont complété ce stage, par exemple la correction de bugs et la participation à la migration du code de Java 8 vers Java 17, avec tout ce qui en découle.

## Ce que j’en retiens

Arrivé avec de meilleures compétences que lors de mes stages précédents, j’ai pu m’impliquer davantage sur un projet plus complexe et plus ancien, ce qui a rendu ce stage particulièrement intéressant, tout en découvrant de nouvelles technologies, en particulier Spring Boot et, dans une moindre mesure, PrimeFaces.
