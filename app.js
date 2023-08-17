import express from "express";
import cors from "cors";
import { ToDo } from "./handle";

const app = express();
app.use(express.json());
app.use(cors());
app.use(ToDo);
export const viteNodeApp = app;
