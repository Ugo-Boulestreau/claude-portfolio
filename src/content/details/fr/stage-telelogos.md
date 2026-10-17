---
# Projets personnels à mettre en avant : noms de fichiers de src/content/projects/fr/, sans .md.
projects: []
---

## Contexte

Pour mon stage de 2e année à Epitech, en 2021, j’ai rejoint Télélogos, une PME éditrice de logiciels basée à Angers. L’entreprise compte parmi ses partenaires des acteurs comme HP, Intel, Philips et Huawei.

Ses logiciels facilitent la circulation de l’information, la mobilité et la collaboration entre les employés et les clients, ainsi que la maintenance des applications déployées.

L’objectif de ce stage était de découvrir le monde de l’entreprise dans le développement web, et les technologies qui le composent.

## Ce que j’ai réalisé

J’ai rejoint à ses débuts le développement d’**Indicators**, un outil interne de gestion des tickets. Ces tickets étaient de plusieurs types, comme les *User Stories*, les *Default Stories* ou les *Technical Stories*. L’une de mes missions a été de créer un tableau de ces tickets, filtrable et triable.

L’application, développée avec .NET Core, suivait une architecture en couches :

- **le front-end**, une page web en Angular, TypeScript et HTML, qui envoie des requêtes HTTP à l’API grâce à la bibliothèque RxJS ;
- **l’API**, en C#, qui reçoit ces requêtes et renvoie les données sous forme de DTO (*Data Transfer Objects*), des objets conçus pour l’échange avec le front-end ;
- **la couche métier**, en C#, qui contient la logique de l’application et accède aux données avec **Entity Framework** et **LINQ**. Entity Framework est un ORM : il fait correspondre les tables de la base de données à des classes C#, et LINQ permet d’écrire les requêtes directement en C# ;
- **deux bases de données SQL Server** : celle d’Indicators, et celle de Redmine, l’outil de suivi de projets de l’entreprise.

![Schéma de l’architecture d’Indicators : la page web en Angular envoie des requêtes HTTP à l’API en C#, qui les transmet à la couche métier ; celle-ci interroge les bases SQL Server Indicateurs et Redmine, puis les données remontent jusqu’à la page sous forme de DTO.](../images/telelogos-architecture-fr.svg)
*L’architecture d’Indicators : les requêtes descendent de la page web jusqu’aux bases de données, et les données remontent jusqu’à la page.*

### La méthode Scrum

L’équipe travaillait avec Scrum, une méthode agile qui découpe le développement en **sprints**, des cycles courts de quelques semaines. Chaque sprint commence par la planification des tâches à réaliser. Il est rythmé par un point quotidien très court, le *daily*, où chacun partage son avancement et ses éventuels blocages. Il se termine par une démonstration du travail accompli, puis par une rétrospective pour améliorer la façon de travailler au sprint suivant.

## Ce que j’en retiens

Ce stage, ma première expérience en entreprise, a été une série de premières fois : découvrir la méthode Scrum et le travail au sein d’une équipe de développement, apprendre de nouveaux langages et technologies alors que je n’avais programmé qu’en C à Epitech, et rejoindre un projet déjà commencé, avec un code existant à comprendre avant de pouvoir y contribuer.
