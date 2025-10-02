import { TaskManager } from "./task-manager.js";
import { ProjectManager } from "./project-manager.js";

export class DisplayController {
    static #projectsList = document.querySelector(".projects-list");
    static #tasksList = document.querySelector(".tasks-list");
    static #newProjectButton = document.querySelector("#new-project-button");
    static #newTaskButton = document.querySelector("#new-task-button");

    static init() {
        this.#newProjectButton.addEventListener("click", this.#createNewProjectElement.bind(this));
        this.#newTaskButton.addEventListener("click", this.#createNewTaskElement.bind(this));

        this.#render();
    }

    static #createNewProjectElement() {
        this.#removeNewItemElements();

        const li = this.#createElement("li", {
            classes: ["list-item", "project-list-item"],
            attrs: {
                id: "new-project",
            },
        });

        const newName = this.#createElement("input", {
            attrs: {
                type: "text",
                name: "new-project-name",
                id: "new-project-name",
                placeholder: "Project name",
            },
        });
        li.appendChild(newName);

        const newDesc = this.#createElement("textarea", {
            attrs: {
                name: "new-project-description",
                id: "new-project-description",
                placeholder: "Project description",
                rows: "5",
            },
        });
        li.appendChild(newDesc);

        const buttonsDiv = this.#createElement("div", {
            classes: ["new-item-buttons"],
        });

        const cancelButton = this.#createElement("button", {
            text: "Cancel",
            attrs: {
                type: "button",
                id: "cancel-new-project",
            },
        });
        cancelButton.addEventListener("click", () => {
            li.remove();
        });
        buttonsDiv.appendChild(cancelButton);

        const confirmButton = this.#createElement("button", {
            text: "Confirm",
            attrs: {
                type: "button",
                id: "confirm-new-project",
            },
        });
        confirmButton.addEventListener("click", () => {
            ProjectManager.createProject(newName.value, newDesc.value);
            li.remove();
            this.#renderProjects();
        });
        buttonsDiv.appendChild(confirmButton);

        li.appendChild(buttonsDiv);

        this.#projectsList.appendChild(li);
    }

    static #createNewTaskElement() {
        this.#removeNewItemElements();

        const li = this.#createElement("li", {
            classes: ["list-item", "task-list-item"],
            attrs: {
                id: "new-task",
            },
        });

        const newName = this.#createElement("input", {
            attrs: {
                type: "text",
                name: "new-task-name",
                id: "new-task-name",
                placeholder: "Task name",
            },
        });
        li.appendChild(newName);

        const newDesc = this.#createElement("textarea", {
            attrs: {
                name: "new-task-description",
                id: "new-task-description",
                rows: "5",
                placeholder: "Task description",
            },
        });
        li.appendChild(newDesc);

        const newDate = this.#createElement("input", {
            attrs: {
                type: "text",
                name: "new-task-date",
                id: "new-task-date",
                placeholder: "Due date",
            },
        });
        li.appendChild(newDate);

        const newPrio = this.#createElement("input", {
            attrs: {
                type: "number",
                name: "new-task-priority",
                id: "new-task-priority",
                min: "1",
                max: "3",
                value: "1",
            },
        });
        li.appendChild(newPrio);

        const buttonsDiv = this.#createElement("div", {
            classes: ["new-item-buttons"],
        });

        const cancelButton = this.#createElement("button", {
            text: "Cancel",
            attrs: {
                type: "button",
                id: "cancel-new-project",
            },
        });
        cancelButton.addEventListener("click", () => {
            li.remove();
        });
        buttonsDiv.appendChild(cancelButton);

        const confirmButton = this.#createElement("button", {
            text: "Confirm",
            attrs: {
                type: "button",
                id: "confirm-new-project",
            },
        });
        confirmButton.addEventListener("click", () => {
            TaskManager.createTask(
                newName.value,
                newDesc.value,
                newDate.value,
                Number(newPrio.value)
            );
            li.remove();
            this.#renderTasks();
        });
        buttonsDiv.appendChild(confirmButton);

        li.appendChild(buttonsDiv);

        this.#tasksList.appendChild(li);
    }

    static #removeNewItemElements() {
        const newProject = document.querySelector("#new-project");
        if (newProject) {
            newProject.remove();
        }

        const newTask = document.querySelector("#new-task");
        if (newTask) {
            newTask.remove();
        }
    }

    static #render() {
        this.#renderProjects();
        this.#renderTasks();
    }

    static #renderProjects() {
        this.#projectsList.innerHTML = "";

        const projects = ProjectManager.getAllProjects();

        for (const [_, project] of Object.entries(projects)) {
            const li = this.#createElement("li", {
                classes: ["list-item", "project-list-item"],
                attrs: {
                    id: `${project.name.toLowerCase().replace(" ", "-")}-project`,
                },
            });

            li.appendChild(
                this.#createElement("h3", {
                    text: project.name,
                })
            );

            li.appendChild(
                this.#createElement("p", {
                    text: project.description,
                })
            );

            this.#projectsList.appendChild(li);
        }
    }

    static #renderTasks() {
        this.#tasksList.innerHTML = "";

        const tasks = TaskManager.getAllTasks();

        tasks.forEach((task) => {
            const li = this.#createElement("li", {
                classes: ["list-item", "task-list-item"],
                attrs: {
                    id: `${task.name.toLowerCase().replace(" ", "-")}-task`,
                },
            });

            li.appendChild(
                this.#createElement("h3", {
                    text: task.name,
                })
            );

            li.appendChild(
                this.#createElement("p", {
                    text: task.description,
                })
            );

            li.appendChild(
                this.#createElement("p", {
                    text: `Due date: ${task.dueDate}`,
                })
            );

            li.appendChild(
                this.#createElement("p", {
                    text: `Priority: ${task.priority}`,
                })
            );

            this.#tasksList.appendChild(li);
        });
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
