import { Request, Response } from "express";

const Task = require("../models/Task");

export const getAllTasks = (req: Request, res: Response) => {
  res.send("All tasks");
};

export const createTask = async (req: Request, res: Response) => {
  const task = await Task.create(req.body);
};

export const getTask = (req: Request, res: Response) => {
  res.send("Get task");
};

export const updateTask = (req: Request, res: Response) => {
  res.send("Update task");
};

export const deleteTask = (req: Request, res: Response) => {
  res.send("Delete task");
};
