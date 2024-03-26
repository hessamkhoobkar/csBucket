import express, { Request, Response } from "express";
import { getAllTasks } from "../controllers/tasks";
export const router = express.Router();

router.get("/", getAllTasks);
