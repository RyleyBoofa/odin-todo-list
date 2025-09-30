// Todo list manager { ItemManager, ProjectManager }
// static classes for creating and manipulating todo list items and projects

import { validateString, validateNumber } from "./validate.js";
import { TodoItem } from "./item.js";
import { Project } from "./project.js";

export class ItemManager {
    static #items = [];

    static createItem(title, description, dueDate, priority) {
        while (!validateString("new item title", title)) {
            title = prompt("What is the task?");
        }

        while (!validateString("new item description", title)) {
            description = prompt("Describe the task");
        }

        while (!validateString("new item due date", title)) {
            dueDate = prompt("When is the task due?");
        }

        while (!validateNumber("new item priority", priority)) {
            priority = Number(
                prompt("How urgent is the task? 1 (not urgent), 2 (somewhat urgent), 3 (urgent)?")
            );
        }

        const item = new TodoItem(title, description, dueDate, priority);
        this.#items.push(item);

        const project = prompt("What project does the task belong to? (Blank if default task)");
        if (validateString("new item project", project)) {
            ProjectManager.addItemToProject(item, project);
        }

        return item;
    }

    static logItems() {
        console.log(ItemManager.#items);
    }
}

export class ProjectManager {
    static #projects = {};

    static createProject(name, description) {
        while (!validateString("new project name", name)) {
            name = prompt("What is the project's name?");
        }

        while (!validateString("new project description", description)) {
            description = prompt("describe the project");
        }

        const project = new Project(name, description);
        this.#projects[project] = project;

        return project;
    }

    static addItemToProject(item, project) {
        if (!this.#projects[project]) {
            this.createProject(project);
        }
        this.#projects[project].addItem(item);
    }

    static logProjects() {
        console.log(ProjectManager.#projects);
    }
}
