export async function generateTrip(prompt) {
  const res = await fetch("/api/trip/plan", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt })
  });

  const text = await res.text();
  const data = text ? JSON.parse(text) : {};

  if (!res.ok) {
    throw new Error(data.error || "Failed to generate trip");
  }

  return data;
}