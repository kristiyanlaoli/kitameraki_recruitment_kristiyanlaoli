import { Router } from "express";
const router = Router();
import fs from "fs";

// Baca data dari file tasks.json
let tasks = JSON.parse(fs.readFileSync("database/tasks.json", "utf8"));
let id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

router.post("/tasks", (req, res) => {
  const task = req.body;
  task.id = id++;
  tasks.push(task);

  fs.writeFileSync("database/tasks.json", JSON.stringify(tasks, null, 2));

  res.status(201).json(task);
});

export default router;
