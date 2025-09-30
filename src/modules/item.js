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
        if (typeof value !== "string" || value === "") {
            console.warn("Invalid title");
            return;
        }
        this.#title = value;
    }

    get description() {
        return this.#description;
    }

    set description(value) {
        if (typeof value !== "string" || value === "") {
            console.warn("Invalid description");
            return;
        }
        this.#description = value;
    }

    get dueDate() {
        return this.#dueDate;
    }

    set dueDate(value) {
        if (typeof value !== "string" || value === "") {
            console.warn("Invalid due date");
            return;
        }
        this.#dueDate = value;
    }

    get priority() {
        return this.#priority;
    }

    set priority(value) {
        if (typeof value !== "number" || value < 1 || value > 3) {
            console.warn("Invalid priority");
            return;
        }
        this.#priority = value;
    }

    get completed() {
        return this.#completed;
    }

    set completed(value) {
        this.#completed = value;
    }
}
