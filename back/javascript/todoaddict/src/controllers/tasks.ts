import { Request, Response } from "express";

export const getAllTasks = (req: Request, res: Response) => {
  res.send("All tasks");
};

export const createTask = (req: Request, res: Response) => {
  res.send("Create task");
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
