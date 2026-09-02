import groq from "../config/groqClient.js";
import { tripPrompt } from "../prompts/tripPrompt.js";

export async function generateTripPlan(userPrompt) {
  const completion = await groq.chat.completions.create({
    model: "openai/gpt-oss-20b",
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
    max_tokens: 6000,
  });

  return completion.choices[0].message.content;
}
