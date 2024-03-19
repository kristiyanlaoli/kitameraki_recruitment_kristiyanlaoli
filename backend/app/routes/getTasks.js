import { Router } from "express";
const router = Router();
import fs from "fs";

let tasks = JSON.parse(fs.readFileSync("database/tasks.json", "utf8"));

router.get("/tasks", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 5;

  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const paginatedTasks = tasks.slice(start, end);

  res.status(200).json(paginatedTasks);
});
export default router;
