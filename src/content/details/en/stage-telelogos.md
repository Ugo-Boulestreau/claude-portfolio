---
# Personal projects to showcase: file names from src/content/projects/en/, without .md.
projects: []
---

## Context

For my 2nd-year internship at Epitech, in 2021, I joined Télélogos, a software publisher based in Angers, France. The company’s partners include names such as HP, Intel, Philips and Huawei.

Its software supports the flow of information, mobility and collaboration between employees and customers, as well as the maintenance of deployed applications.

The goal of this internship was to discover the business world of web development, and the technologies it relies on.

## What I built

I joined the development of **Indicators**, an internal ticket management tool, in its early days. There were several types of tickets, such as *User Stories*, *Default Stories* and *Technical Stories*. One of my tasks was to build a filterable, sortable table of these tickets.

The application, built with .NET Core, followed a layered architecture:

- **the front-end**, a web page in Angular, TypeScript and HTML, which sends HTTP requests to the API using the RxJS library;
- **the API**, in C#, which receives these requests and returns data as DTOs (*Data Transfer Objects*), objects designed for exchanging data with the front-end;
- **the business layer**, in C#, which holds the application logic and accesses data with **Entity Framework** and **LINQ**. Entity Framework is an ORM: it maps database tables to C# classes, and LINQ lets you write queries directly in C#;
- **two SQL Server databases**: Indicators’ own, and that of Redmine, the company’s project tracking tool.

![Diagram of the Indicators architecture: the Angular web page sends HTTP requests to the C# API, which passes them to the business layer; the business layer queries the Indicators and Redmine SQL Server databases, and the data flows back up to the page as DTOs.](../images/telelogos-architecture-en.svg)
*The Indicators architecture: requests travel down from the web page to the databases, and data flows back up to the page.*

### The Scrum method

The team worked with Scrum, an agile method that splits development into **sprints**, short cycles of a few weeks. Each sprint starts with planning the tasks to be done. It is paced by a very short daily meeting, the *daily stand-up*, where everyone shares their progress and any blockers. It ends with a demo of the work completed, then a retrospective to improve the way the team works in the next sprint.

## What I learned

This internship, my first experience in a company, was a series of firsts: discovering Scrum and working within a development team, learning new languages and technologies when I had only programmed in C at Epitech, and joining a project already under way, with existing code to understand before I could contribute to it.
