import { listTasks } from "./controllers/list-tasks.js"
import { createTask } from "./controllers/create-task.js";

import { buildRoutePath } from "./utils/build-route-path.js";
import { deleteTask } from "./controllers/delete-task.js";
import { updateTask } from "./controllers/update-task.js";
import { doneTask } from "./controllers/done-task.js";

export const routes = [
  {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: listTasks
  },
  {
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handler: createTask
  },
  {
    method: "PUT",
    path: buildRoutePath("/tasks/:id"),
    handler: updateTask
  },
  {
    method: "PATCH",
    path: buildRoutePath("/tasks/:id/complete"),
    handler: doneTask
  },
  {
    method: "DELETE",
    path: buildRoutePath("/tasks/:id"),
    handler: deleteTask
  }
]
