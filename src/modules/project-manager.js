import { validateString } from "./validate.js";
import { Project } from "./project.js";

export class ProjectManager {
    static #projects = {};

    static createProject(name, description) {
        if (
            !validateString("new project name", name) ||
            !validateString("new task description", description)
        ) {
            console.warn("Cancelling new project creation");
            return;
        }

        const project = new Project(name, description);
        this.#projects[name] = project;

        return project;
    }

    static getProject(name) {
        return this.#projects[name];
    }

    static addTaskToProject(task, projectName) {
        if (!this.#projects[projectName]) {
            this.createProject(projectName, "New project");
        }
        this.#projects[projectName].addTask(task);
    }

    static logProjects() {
        console.log(this.#projects);
    }
}
