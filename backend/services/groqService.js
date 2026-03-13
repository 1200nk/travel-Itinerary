import groq from "../config/groqClient.js";
import { tripPrompt } from "../prompts/tripPrompt.js";

export async function generateTripPlan(userPrompt) {
  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content: tripPrompt,
      },
      {
        role: "user",
        content: userPrompt,
      },
    ],
  });

  return completion.choices[0].message.content;
}
