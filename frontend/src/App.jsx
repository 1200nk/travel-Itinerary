import { useState } from "react";
import PromptInput from "./components/PromptInput";
import { generateTrip } from "./services/api";

function App() {

  const [trip, setTrip] = useState("");

  async function handleSubmit(prompt) {

    const data = await generateTrip(prompt);

    setTrip(data.trip);

  }

  return (

    <div style={{ padding: 40 }}>

      <h1>AI Travel Planner</h1>

      <PromptInput onSubmit={handleSubmit} />

      <pre>{trip}</pre>

    </div>

  );

}

export default App;