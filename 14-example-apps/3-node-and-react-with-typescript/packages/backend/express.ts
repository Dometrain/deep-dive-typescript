import express, { Request, Response } from "express";
import type { Vehicle } from "../types/vehicle";

const app = express();

// enable cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const port = 3001;

app.get("/", (req: Request, res: Response) => {
  res.send("Express Server");
});

app.get("/cars", (req: Request, res: Response) => {
  const cars: Vehicle[] = [
    { id: 1, year: 2025, make: "BMW", model: "X5" },
    { id: 2, year: 2024, make: "Audi", model: "Q7" },
    { id: 3, year: 2020, make: "Mercedes", model: "GLE" },
  ];
  res.send(cars);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
