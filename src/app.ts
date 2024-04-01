import express, { Application, Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./app/router";
import GEH from "./app/error/errorHandle";
const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: ["https://frontend-assign5.vercel.app", "http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/", router);
app.use(GEH);

const getACon = (req: Request, res: Response) => {
  res.status(200).json({
    status: "Succcess",
    message: "Welcome to my assign",
  });
};

app.get("/", getACon);
export default app;
