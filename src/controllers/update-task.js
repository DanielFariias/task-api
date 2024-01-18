import { db } from "../db.js";

export function updateTask(req, res) {
  const { id } = req.params;
  const { title, description } = req.body;

  if (!id) return res.writeHead(400).end(JSON.stringify({ error: 'Id is required'}));

  const isSuccessful = db.update('tasks', id, { title, description });
  if(!isSuccessful) return res.writeHead(404).end(JSON.stringify({ error: 'Task not found'}));


  return res.writeHead(204).end();
}
