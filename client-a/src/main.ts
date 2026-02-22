import express, { Request, Response } from "express";
import client from "prom-client";

const app = express();
const PORT = 3001;

// Collect default system metrics (CPU, memory, etc.)
client.collectDefaultMetrics();

// Custom counter metric
const requestCounter = new client.Counter({
  name: "client_a_requests_total",
  help: "Total number of requests received by Client A",
  labelNames: ["method", "route", "status"]
});

// Middleware to count requests
app.use((req: Request, res: Response, next) => {
  res.on("finish", () => {
    requestCounter.inc({
      method: req.method,
      route: req.path,
      status: res.statusCode
    });
  });
  next();
});

// Root endpoint
app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Client A running (Node.js + TypeScript)"
  });
});

// Health endpoint
app.get("/health", (req: Request, res: Response) => {
  res.json({
    status: "ok"
  });
});

// Prometheus metrics endpoint
app.get("/metrics", async (req: Request, res: Response) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

// Start server
app.listen(PORT, () => {
  console.log(`Client A running on port ${PORT}`);
});
