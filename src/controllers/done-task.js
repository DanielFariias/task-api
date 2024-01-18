import { db } from "../db.js";

export function doneTask(req, res) {
  const { id } = req.params;

  const taskSelected = db.select('tasks', { id });

  if (!taskSelected[0]) {
    return res.writeHead(404).end();
  }

  const [task] = taskSelected

  const isCompleted = task.completed_at !== null;

  const completed_at = isCompleted ? null : new Date();

  db.update('tasks', id, {
    ...task,
    completed_at,
    updated_at: new Date()
  });

  return res.writeHead(204).end();
}
