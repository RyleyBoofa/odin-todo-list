import { TaskManager } from "./task-manager.js";
import { ProjectManager } from "./project-manager.js";

export class DisplayController {
    static #tasks = document.querySelector(".tasks");
    static #projects = document.querySelector(".projects");
    static #refresh = document.querySelector("#refresh");

    static init() {
        this.#refresh.addEventListener("click", this.#render.bind(this));
    }

    static #render() {
        this.#renderTasks();
        this.#renderProjects();
    }

    static #renderTasks() {
        const tasks = TaskManager.getAllTasks();

        tasks.forEach((task) => {
            const div = this.#createElement("div", {
                classes: ["task"],
            });

            div.appendChild(
                this.#createElement("h2", {
                    text: task.name,
                })
            );

            div.appendChild(
                this.#createElement("p", {
                    text: task.description,
                })
            );

            this.#tasks.appendChild(div);
        });
    }

    static #renderProjects() {
        const projects = ProjectManager.getAllProjects();

        for (const [_, project] of Object.entries(projects)) {
            const div = this.#createElement("div", {
                classes: ["project"],
            });

            div.appendChild(
                this.#createElement("h1", {
                    text: project.name,
                })
            );

            div.appendChild(
                this.#createElement("p", {
                    text: project.description,
                })
            );

            this.#projects.appendChild(div);
        }
    }

    static #createElement(tag, { text = "", classes = [], attrs = {} } = {}) {
        if (!tag) {
            console.error("Required <tag> not provided");
            return null;
        }

        const element = document.createElement(tag);

        if (text) {
            element.textContent = text;
        }

        classes.forEach((cls) => {
            element.classList.add(cls);
        });

        for (const [key, value] of Object.entries(attrs)) {
            element.setAttribute(key, value);
        }

        return element;
    }
}
