import { TodoItem } from "./item.js";

export class ItemManager {
    static createItem() {
        const title = prompt("Item title");
        if (!this.#validateField(title, "string")) return;

        const description = prompt("Item description");
        if (!this.#validateField(description, "string")) return;

        const dueDate = prompt("Item due date");
        if (!this.#validateField(dueDate, "string")) return;

        const priority = Number(prompt("Item priority (1-3)"));
        if (!this.#validateField(priority, "number")) return;

        const item = new TodoItem(title, description, dueDate, priority);

        return item;
    }

    static #validateField(value, type, required = true) {
        if (required && !value) {
            alert("Field required. Item creation cancelled.");
            return false;
        } else if (typeof value !== type) {
            alert("Field type invalid. Item creation cancelled.");
            return false;
        }

        return true;
    }
}
