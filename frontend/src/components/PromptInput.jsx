import { useState } from "react";

export default function PromptInput({ onSubmit }) {

  const [text, setText] = useState("");

  return (
    <div>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Plan a 3 day Thailand trip"
      />

      <button onClick={() => onSubmit(text)}>
        Plan Trip
      </button>

    </div>
  );
}