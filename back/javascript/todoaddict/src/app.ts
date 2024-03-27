import express, { Express } from "express";
import dotenv from "dotenv";
import { router as tasks } from "./routers/tasks";

const connectDB = require("./db/connection");

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1/tasks", tasks);

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  })
  .catch(console.dir);
