export async function generateTrip(prompt) {

  const res = await fetch("/api/trip/plan", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt })
  });

  const data = await res.json();

  return data;
}