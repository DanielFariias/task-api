import { randomUUID } from "node:crypto";

import { db } from "../db.js";

export function createTask(req, res) {
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
