import { db } from "../db.js";

export function updateTask(req, res) {
  const { id } = req.params;
  const { title, description } = req.body;

  db.update('tasks', id, { title, description });

  return res.writeHead(204).end();
}
