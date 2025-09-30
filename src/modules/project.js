// Todo list project
// data object with getters, setters, and methods to add/remove items

import { validateString } from "./validate.js";

export class Project {
    #name;
    #description;
    #items;

    constructor(name, description) {
        this.#name = name;
        this.#description = description;
        this.#items = [];
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

    get items() {
        return this.#items;
    }

    addItem(item) {
        this.#items.push(item);
    }

    removeItem(item) {
        this.#items = this.#items.filter((i) => i !== item);
    }
}
