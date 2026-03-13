import express from "express";
import cors from "cors";
import tripRoutes from "./routes/tripRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/trip", tripRoutes);

/* ---------------- */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const frontendPath = path.join(__dirname, "../frontend/dist");

app.use(express.static(frontendPath));

app.use((req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

/* --------------- */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running.");
});