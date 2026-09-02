import { Sparkles } from "lucide-react";
import { useState } from "react";

export default function PromptInput({ onSubmit, isLoading }) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(text);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-300">
          Travel brief
        </span>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={6}
          placeholder="Plan a 3-day Thailand trip with beaches, temples, and local food"
          className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-base text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
        />
      </label>

      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 px-5 py-3.5 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Sparkles className="h-4 w-4" />
        {isLoading ? "Planning your trip..." : "Generate Trip"}
      </button>
    </form>
  );
}