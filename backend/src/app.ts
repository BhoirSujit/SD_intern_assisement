import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import { isHttpError } from "http-errors";
import userRoute from "./routes/user"

const app = express();

app.use(cors());

app.use(morgan("dev"));

app.use(express.json());

//routes
app.use("/api/user", userRoute)

//error handling
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  let status = 500;
  let message = "An unknown error occured";

  if (isHttpError(error)) {
    status = error.status;
    message = error.message;
  }

  res.status(status).json({
    message: message,
  });
});

export default app;
