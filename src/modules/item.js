// Individual todo list item
// data object with getters and setters

import { validateString, validateNumber, validateBoolean } from "./validate.js";

export class TodoItem {
    #title;
    #description;
    #dueDate;
    #priority;
    #completed;

    constructor(title, description, dueDate, priority) {
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#completed = false;
    }

    get title() {
        return this.#title;
    }

    set title(value) {
        if (validateString(`${this.#title} new title`, value)) {
            this.#title = value;
        }
    }

    get description() {
        return this.#description;
    }

    set description(value) {
        if (validateString(`${this.#title} new description`, value)) {
            this.#title = value;
        }
    }

    get dueDate() {
        return this.#dueDate;
    }

    set dueDate(value) {
        if (validateString(`${this.#title} new due date`, value)) {
            this.#title = value;
        }
    }

    get priority() {
        return this.#priority;
    }

    set priority(value) {
        if (validateNumber(`${this.#title} new priority`, value)) {
            this.#title = value;
        }
    }

    get completed() {
        return this.#completed;
    }

    set completed(value) {
        if (validateBoolean(`${this.title} new completed`, value)) {
            this.#completed = value;
        }
    }
}
