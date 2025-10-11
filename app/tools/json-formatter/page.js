"use client";

import { useState } from "react";

export default function JSONFormatter() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [error, setError] = useState("");

    const handleFormat = () => {
        try {
            const parsed = JSON.parse(input);
            const formatted = JSON.stringify(parsed, null, 2);
            setOutput(formatted);
            setError("");
        } catch (err) {
            setError("❌ Invalid JSON: " + err.message);
            setOutput("");
        }
    };

    const handleClear = () => {
        setInput("");
        setOutput("");
        setError("");
    };

    const handleCopy = async () => {
        if (!output) return;
        await navigator.clipboard.writeText(output);
        alert("✅ Formatted JSON copied to clipboard!");
    };

    return (
        <main className="max-w-5xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-bold text-slate-900 mb-2 text-center">
                JSON Formatter
            </h1>
            <p className="text-slate-600 text-center mb-10">
                Paste your JSON below to beautify or validate it instantly.
            </p>

            {/* Input Section */}
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-lg font-semibold mb-2 text-slate-700">
                        Input JSON
                    </h2>
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder='{"name": "Ace", "goal": "build DevToolkit"}'
                        className="w-full h-72 p-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono text-sm resize-none"
                    />
                    {error && (
                        <p className="text-red-500 text-sm mt-2 font-medium">{error}</p>
                    )}

                    <div className="flex gap-3 mt-4">
                        <button
                            onClick={handleFormat}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-medium transition"
                        >
                            Format
                        </button>
                        <button
                            onClick={handleClear}
                            className="bg-slate-200 hover:bg-slate-300 text-slate-800 px-5 py-2 rounded-lg font-medium transition"
                        >
                            Clear
                        </button>
                    </div>
                </div>

                {/* Output Section */}
                <div>
                    <h2 className="text-lg font-semibold mb-2 text-slate-700">
                        Formatted Output
                    </h2>
                    <textarea
                        value={output}
                        readOnly
                        placeholder="Formatted JSON will appear here..."
                        className="w-full h-72 p-4 rounded-xl border border-slate-300 bg-slate-50 font-mono text-sm resize-none"
                    />
                    <div className="flex justify-end mt-4">
                        <button
                            onClick={handleCopy}
                            disabled={!output}
                            className={`px-5 py-2 rounded-lg font-medium transition ${output
                                    ? "bg-green-600 hover:bg-green-700 text-white"
                                    : "bg-slate-300 text-slate-500 cursor-not-allowed"
                                }`}
                        >
                            Copy Output
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
