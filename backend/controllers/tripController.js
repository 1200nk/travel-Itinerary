import { generateTripPlan } from "../services/groqService.js";

export async function generateTrip(req, res) {
  try {
    const { prompt } = req.body;

    if (!prompt || !String(prompt).trim()) {
      return res.status(400).json({ error: "Prompt is required." });
    }

    const trip = await generateTripPlan(prompt);

    res.json({ trip });
  } catch (error) {
    console.error("Trip generation failed.");

    res.status(500).json({
      error: "Unable to generate trip plan right now. Please try again later."
    });
  }
}