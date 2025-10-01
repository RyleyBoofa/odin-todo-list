import { validateString } from "./validate.js";

export class Project {
    #name;
    #description;
    tasks;

    constructor(name, description) {
        this.#name = name;
        this.#description = description;
        this.tasks = [];
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        if (validateString(`${this.#name} new name`, value)) {
            this.#name = value;
        }
    }

    get description() {
        return this.#description;
    }

    set description(value) {
        if (validateString(`${this.#name} new description`, value)) {
            this.#description = value;
        }
    }

    get tasks() {
        return this.tasks;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(task) {
        this.tasks = this.tasks.filter((item) => item !== task);
    }
}
