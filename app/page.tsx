"use client";

import { useState } from "react";

export default function EventDashboard() {
  const [prompt, setPrompt] = useState("");
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateEvent = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setEventData(data);
    } catch (error) {
      console.error("Failed to generate event", error);
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 p-10 text-gray-900">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">AI Event Manager</h1>
          <p className="mt-2 text-lg text-gray-600">Automate your event scheduling and logistics.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <label className="block text-sm font-medium text-gray-700 mb-2">Event Requirements</label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            rows={4}
            placeholder="e.g., Plan a 2-day corporate tech summit for 200 people..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            onClick={generateEvent}
            disabled={loading || !prompt}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Generating..." : "Generate Event Dashboard"}
          </button>
        </div>

        {eventData && (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-green-200 border-t-4 border-t-green-500">
            <h2 className="text-2xl font-semibold mb-2">{(eventData as any).title}</h2>
            <p className="text-gray-700 mb-4">{(eventData as any).description}</p>
            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              Status: {(eventData as any).status}
            </span>
          </div>
        )}
      </div>
    </main>
  );
}