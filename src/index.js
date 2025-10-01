import { TaskManager } from "./modules/task-manager.js";
import { ProjectManager } from "./modules/project-manager.js";
import { DisplayController } from "./modules/display-controller.js";

import "./styles.css";

console.log("Hello, World!");

window.TaskManager = TaskManager;
window.ProjectManager = ProjectManager;
window.DisplayController = DisplayController;

DisplayController.init();
