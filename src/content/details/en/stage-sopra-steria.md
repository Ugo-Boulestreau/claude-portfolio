---
# Personal projects to showcase: file names from src/content/projects/en/, without .md.
projects: []
---

## Context

For my final-year internship, I joined Sopra Steria, a French digital services company formed in 2014 by the merger of Sopra and Steria. A major tech player in Europe, the group has around 50,000 employees in nearly 30 countries.

The software and data I worked on are confidential: this page therefore stays deliberately general, without details about the client or its data.

## What I built

I worked on billing software developed for a major client in the transport sector. It calculates the value of the services provided and prepares their pre-invoicing.

The team followed the Scrum method, and the application relied on a wide range of technologies:

- **HMI** (human-machine interface): JSF and PrimeFaces;
- **Business layer**: Java with Spring Boot;
- **Dependency management and build**: Maven;
- **Containers and deployment**: Docker, Kubernetes and Helm;
- **Continuous integration (CI)**: Jenkins and Azure DevOps;
- **Azure cloud**: Databricks, Spark, Azure Data Lake and PostgreSQL.

I mainly worked with Spring Boot and PrimeFaces; the other building blocks were part of the project’s environment, and I only dealt with them from a distance.

### Getting started: training and a first feature

During the first weeks, I trained on my own through Sopra Steria’s internal courses: the company’s values and best practices, then technical training in Java and Spring. My first assignment was then to add a very small feature, to get familiar with the application’s code.

### Example task: adding a piece of data to the HMI

One of my tasks was to add a new piece of data, displayed in a table column of the HMI. The task is not very complex in itself, but it requires a solid understanding of the architecture and of the data flow, from the database to the screen.

The application follows a **three-tier architecture**: the presentation layer never reads the database directly, and data goes through every layer. In practice, I:

1. **created the data in the database**, with an SQL query adding a new column, of a defined type, to the relevant table;
2. **adapted the DAO** (*Data Access Object*) linked to that table. This design pattern separates data access from business logic: it encapsulates exchanges with the database to make data easier to handle;
3. **adapted the DTO** (*Data Transfer Object*) and the mapping from the DAO to the DTO. A DTO is a simple object that only holds data and packages several fields together, designed to travel between layers: it is what carries the new data to the business layer and the HMI;
4. **displayed the new data** in the HMI table column.

On my first attempt, I didn’t have the full picture of this data flow: I missed adapting some layers, which caused compilation errors. With the team’s help, I traced the data flow again by studying the architecture, and correctly adapted every layer.

### Other tasks

Other tasks rounded out this internship, such as fixing bugs and taking part in migrating the code from Java 8 to Java 17, with everything that came with it.

## What I learned

Coming in with stronger skills than in my previous internships, I was able to get more involved in a more complex and older project, which made this internship particularly interesting, while discovering new technologies, especially Spring Boot and, to a lesser extent, PrimeFaces.
