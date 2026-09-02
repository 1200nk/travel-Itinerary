import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import PromptInput from "./components/PromptInput";
import { generateTrip } from "./services/api";

const samplePrompts = [
	"Plan a 5-day trip to Kyoto with food, culture, and scenic neighborhoods",
	"Create a romantic 3-day Bali itinerary with beaches and sunset spots",
	"Design a budget-friendly weekend in Lisbon with food and local experiences",
];

function App() {
	const [trip, setTrip] = useState("");
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	async function handleSubmit(prompt) {
		const trimmedPrompt = prompt?.trim();

		if (!trimmedPrompt) {
			setError("Please enter a travel prompt first.");
			setTrip("");
			return;
		}

		try {
			setIsLoading(true);
			setError("");
			const data = await generateTrip(trimmedPrompt);
			setTrip(data.trip || "No trip plan was returned.");
		} catch (err) {
			setTrip("");
			setError(err.message || "Something went wrong while generating your trip.");
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div className="min-h-screen bg-[#020b1a] text-slate-50">
			<div className="mx-auto flex max-w-[1520px] gap-5 px-3 py-4 md:px-5">
				<aside className="w-[230px] shrink-0 rounded-[26px] border border-slate-800 bg-[#0a1627] p-4 shadow-xl shadow-slate-950/40">
					<div className="mb-5">
						<p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
							Trip prompt
						</p>
						<h2 className="text-3xl font-semibold leading-tight text-white">
							Tell the assistant where you want to go
						</h2>
					</div>

					<PromptInput onSubmit={handleSubmit} isLoading={isLoading} />

					<div className="mt-6 space-y-2">
						{samplePrompts.map((sample) => (
							<button
								key={sample}
								type="button"
								onClick={() => handleSubmit(sample)}
								className="w-full rounded-2xl border border-slate-700 bg-slate-800/80 px-3 py-2.5 text-left text-sm text-slate-200 transition hover:border-cyan-400/50 hover:bg-slate-800"
							>
								{sample}
							</button>
						))}
					</div>

					{error && (
						<div className="mt-5 rounded-2xl border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-xs text-rose-200">
							{error}
						</div>
					)}
				</aside>

				<main className="flex-1 rounded-[26px] border border-slate-800 bg-[#07192b] p-4 shadow-xl shadow-slate-950/40">
					<div className="mb-4 flex items-center justify-between border-b border-slate-800 pb-4">
						<div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
							<span className="rounded-full border border-slate-700 bg-slate-800 px-2 py-1">
								Preview
							</span>
						</div>
					</div>

					<div className="rounded-[20px] border border-slate-800 bg-[#020d1d] p-4">
						<div className="min-h-[620px] rounded-[18px] border border-slate-800 bg-[#020d1d] p-4">
							{isLoading ? (
								<div className="flex min-h-[560px] items-center justify-center">
									<div className="flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-100">
										<div className="h-4 w-4 animate-spin rounded-full border-2 border-cyan-300 border-t-transparent" />
										Building your trip...
									</div>
								</div>
							) : trip ? (
								<div className="prose prose-invert max-w-none overflow-x-auto text-slate-100">
									<ReactMarkdown
										remarkPlugins={[remarkGfm]}
										components={{
											h1: ({ children }) => (
												<h1 className="mb-3 mt-0 text-2xl font-bold text-white">
													{children}
												</h1>
											),
											h2: ({ children }) => (
												<h2 className="mb-3 mt-0 text-xl font-bold text-white">
													{children}
												</h2>
											),
											h3: ({ children }) => (
												<h3 className="mb-3 mt-0 text-lg font-bold text-cyan-200">
													{children}
												</h3>
											),
											strong: ({ children }) => (
												<strong className="font-bold text-cyan-300">
													{children}
												</strong>
											),
											p: ({ children }) => (
												<p className="mb-3 text-[15px] leading-7 text-slate-100">
													{children}
												</p>
											),
											table: ({ children }) => (
												<div className="mb-4 overflow-x-auto rounded-xl border border-slate-700 bg-slate-950/60">
													<table className="w-full border-collapse text-left text-sm text-slate-100">
														{children}
													</table>
												</div>
											),
											th: ({ children }) => (
												<th className="border-b border-slate-700 bg-slate-900/80 px-3 py-2 font-semibold text-cyan-200">
													{children}
												</th>
											),
											td: ({ children }) => (
												<td className="border-b border-slate-700 px-3 py-2 align-top text-slate-100">
													{children}
												</td>
											),
											ul: ({ children }) => (
												<ul className="mb-3 list-disc pl-6">{children}</ul>
											),
											ol: ({ children }) => (
												<ol className="mb-3 list-decimal pl-6">{children}</ol>
											),
											li: ({ children }) => (
												<li className="mb-1 text-slate-100">{children}</li>
											),
										}}
									>
										{trip}
									</ReactMarkdown>
								</div>
							) : (
								<div className="flex min-h-[560px] items-center justify-center text-center text-sm text-slate-400">
									Your travel plan will appear here after you submit a prompt.
								</div>
							)}
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default App;