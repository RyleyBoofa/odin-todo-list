import { validateString, validateNumber, validateBoolean } from "./validate.js";

export class Task {
    #name;
    #description;
    #dueDate;
    #priority;
    #completed;

    constructor(name, description, dueDate, priority) {
        this.#name = name;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#completed = false;
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
            this.#name = value;
        }
    }

    get dueDate() {
        return this.#dueDate;
    }

    set dueDate(value) {
        if (validateString(`${this.#name} new due date`, value)) {
            this.#name = value;
        }
    }

    get priority() {
        return this.#priority;
    }

    set priority(value) {
        if (validateNumber(`${this.#name} new priority`, value)) {
            this.#name = value;
        }
    }

    get completed() {
        return this.#completed;
    }

    set completed(value) {
        if (validateBoolean(`${this.name} new completed`, value)) {
            this.#completed = value;
        }
    }
}
