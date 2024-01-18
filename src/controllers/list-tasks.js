import { db } from "../db.js";

export function listTasks(req, res)  {
  const { search } = req.query

  const verifySearch = search ? {
    title: search, description: search
  } : null

  const tasks = db.select('tasks', verifySearch);

  return res.end(JSON.stringify(tasks));
}
