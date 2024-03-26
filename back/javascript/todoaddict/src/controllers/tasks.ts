import { Request, Response } from "express";

export const getAllTasks = (req: Request, res: Response) => {
  res.send("All tasks from controller");
};
