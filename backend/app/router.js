import getTasks from "./routes/getTasks.js";
import postTask from "./routes/postTask.js";
import getTaskById from "./routes/getTaskById.js";
import updateTask from "./routes/updateTask.js";
import deleteTask from "./routes/deleteTask.js";

import { Router } from "express";
const router = Router();

router.use("/api", getTasks);
router.use("/api", postTask);
router.use("/api", getTaskById);
router.use("/api", updateTask);
router.use("/api", deleteTask);

export default router;
