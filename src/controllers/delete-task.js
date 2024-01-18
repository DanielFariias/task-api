import { db } from "../db.js";

export function deleteTask(req, res) {
  const { id } = req.params;

  if (!id) return res.writeHead(400).end(JSON.stringify({ error: 'Id is required'}));

 const isSuccessful = db.delete('tasks', id);
 if(!isSuccessful) return res.writeHead(404).end()

  return res.writeHead(204).end();
}
