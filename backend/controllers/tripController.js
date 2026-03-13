import { generateTripPlan } from "../services/groqService.js";

export async function generateTrip(req, res) {

  try {

    const { prompt } = req.body;

    const trip = await generateTripPlan(prompt);

    res.json({ trip });

  } catch (error) {

    console.error("ERROR:", error);

    res.status(500).json({
      error: "Failed to generate trip"
    });

  }

}