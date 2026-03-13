import express from "express";
import { generateTrip } from "../controllers/tripController.js";

const router = express.Router();

router.post("/plan", generateTrip);

export default router;