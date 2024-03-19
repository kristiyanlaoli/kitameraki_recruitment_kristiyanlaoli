import { Router } from "express";
const router = Router();
import fs from "fs";

// Baca data dari file tasks.json
let tasks = JSON.parse(fs.readFileSync("database/tasks.json", "utf8"));
let id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

router.put("/tasks/:id", (req, res) => {
  let task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send("Task not found");

  task = { ...task, ...req.body, id: task.id };
  tasks = tasks.map((t) => (t.id === task.id ? task : t));

  // Tulis data ke file tasks.json
  fs.writeFileSync("database/tasks.json", JSON.stringify(tasks, null, 2));

  res.status(200).json(task);
});

export default router;
