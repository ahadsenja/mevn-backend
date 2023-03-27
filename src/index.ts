import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import routes from "./routes";

dotenv.config();

const app: Express = express();
const port: string = process.env.PORT ?? "3300";

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})