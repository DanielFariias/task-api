import { randomUUID } from "node:crypto";

import { db } from "../db.js";

export function createTask(req, res) {
  const hasTitle = req.body.title ? true : false;
  const hasDescription = req.body.description ? true : false;

  if (!hasTitle) return res.writeHead(200).end(JSON.stringify({ error: 'Title is required'}));
  if (!hasDescription) return res.writeHead(400).end(JSON.stringify({ error: 'Description is required'}));

  const { title, description } = req.body;

  const task = ({
    id: randomUUID(),
    title,
    description,
    completed_at: null,
    created_at: new Date(),
    updated_at: new Date(),
  });

  db.insert('tasks', task);

  return res.writeHead(201).end();
}
