import { db } from "../db.js";

export function deleteTask(req, res) {
  const { id } = req.params;

  db.delete('tasks', id);

  return res.writeHead(204).end();
}
