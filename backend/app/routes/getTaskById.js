import { Router } from "express";
const router = Router();
import fs from "fs";

let tasks = JSON.parse(fs.readFileSync("database/tasks.json", "utf8"));

router.get("/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send("Task not found");

  res.status(200).json(task);
});

export default router;
