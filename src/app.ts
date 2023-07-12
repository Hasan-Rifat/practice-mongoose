import express, { Application } from "express";
import cors from "cors";

const app: Application = express();
// api routes
import userRouter from "./app/modules/user/user.router";

// use cors middleware
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/user", userRouter);

export default app;
