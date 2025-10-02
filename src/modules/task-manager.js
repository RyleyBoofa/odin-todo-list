import { validateString, validateNumber } from "./validate.js";
import { Task } from "./task.js";

export class TaskManager {
    static #tasks = [new Task("Sample task", "This is a sample task", "02/10/25", 1)];

    static getAllTasks() {
        return this.#tasks;
    }

    static createTask(name, description, dueDate, priority) {
        if (
            !validateString("new task name", name) ||
            !validateString("new task description", description) ||
            !validateString("new task due date", dueDate) ||
            !validateNumber("new task priority", priority)
        ) {
            console.warn("Cancelling new task creation");
            return;
        }

        const task = new Task(name, description, dueDate, priority);
        this.#tasks.push(task);

        return task;
    }

    static getTask(name) {
        return this.#tasks.find((task) => task.name === name);
    }

    static logTasks() {
        console.log(this.#tasks);
    }
}
