import React, { useState } from 'react';

export default function OrderForm() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const API_BASE = "https://your-grip-api.glitch.me"; // Replace with real API

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(\`\${API_BASE}/generate\`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    setResponse(data.result);
  };

  return (
    <div className="max-w-xl mx-auto mt-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter your idea..."
          className="w-full p-2 border rounded"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Generate</button>
      </form>
      {response && <div className="mt-4 p-4 bg-gray-100 rounded">{response}</div>}
    </div>
  );
}