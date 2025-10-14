"use client";
import React, { useState } from "react";

const Base64Tool = () => {
  const [mode, setMode] = useState("encode");
  const [result, setResult] = useState("");

    
    




  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-20 p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Base64 Encoder / Decoder
      </h1>

      {/* Mode Toggle */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setMode("encode")}
          className={`px-6 py-2 rounded-lg font-medium transition ${
            mode === "encode"
              ? "bg-indigo-600 text-white"
              : "bg-white border border-gray-300 text-gray-800 hover:bg-gray-100"
          }`}
        >
          Encode
        </button>
        <button
          onClick={() => setMode("decode")}
          className={`px-6 py-2 rounded-lg font-medium transition ${
            mode === "decode"
              ? "bg-indigo-600 text-white"
              : "bg-white border border-gray-300 text-gray-800 hover:bg-gray-100"
          }`}
        >
          Decode
        </button>
      </div>

      {/* Input Box */}
      <div className="w-full max-w-3xl mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          {mode === "encode" ? "Text to Encode:" : "Base64 to Decode:"}
        </label>
        <textarea
          rows="5"
          placeholder={
            mode === "encode"
              ? "Enter plain text here..."
              : "Enter Base64 text here..."
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none text-gray-800"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-4">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition">
          {mode === "encode" ? "Encode" : "Decode"}
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg font-medium transition">
          Clear
        </button>
      </div>

      {/* Output */}
      <div className="w-full max-w-3xl">
        <label className="block text-gray-700 font-medium mb-2">Result:</label>
        <textarea
          rows="5"
          readOnly
          placeholder="Your result will appear here..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:outline-none resize-none"
        />
      </div>
    </div>
  );
};

export default Base64Tool;
