"use client";
import React, { useState } from "react";

const Base64Tool = () => {
    const [mode, setMode] = useState("encode");
    const [result, setResult] = useState("");
    const [text, settext] = useState("");
    const [isURLsafe, setIsURLsafe] = useState(false)




    const handleSubmit = () => {
        if (isURLsafe === true) {
            if (mode === "encode") {
                let encoded = btoa(text);

                // If user checks "URL-safe"
                encoded = encoded
                    .replace(/\+/g, '-')  // Replace + with -
                    .replace(/\//g, '_')  // Replace / with _
                    .replace(/=+$/, '');  // Remove trailing =

                console.log(encoded)
                setResult(encoded)
            }
            if (mode === "decode") {
                try {
                    let safeText = text
                        .replace(/-/g, '+')   // Replace - back to +
                        .replace(/_/g, '/');  // Replace _ back to /

                    while (safeText.length % 4 !== 0) {
                        safeText += '='; // Re-add padding if needed
                    }

                    const decoded = atob(safeText);




                    console.log(decoded)
                    setResult(decoded)
                } catch (error) {
                    alert(error)

                }
            }




        }
        else {
            if (mode === "encode") {
                const encoded = btoa(text);

                console.log(encoded)
                setResult(encoded)
            }
            if (mode === "decode") {
                try {
                    const decoded = atob(text);
                    console.log(decoded)
                    setResult(decoded)
                } catch (error) {
                    alert(error)

                }
            }


        }



        // setResult("")
        // settext("")

    }

    const handleclear = () => {
        setResult("")
        settext("")
    }






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
                    className={`px-6 py-2 rounded-lg font-medium transition ${mode === "encode"
                        ? "bg-indigo-600 text-white"
                        : "bg-white border border-gray-300 text-gray-800 hover:bg-gray-100"
                        }`}
                >
                    Encode
                </button>
                <button
                    onClick={() => setMode("decode")}
                    className={`px-6 py-2 rounded-lg font-medium transition ${mode === "decode"
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
                    value={text}
                    onChange={(e) => settext(e.target.value)}
                    placeholder={
                        mode === "encode"
                            ? "Enter plain text here..."
                            : "Enter Base64 text here..."
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none text-gray-800"
                />

                <label

                    className="flex items-center gap-2 cursor-pointer select-none text-gray-800 font-medium">
                    <input
                        // onChange={()=>handleCheck()}
                        checked={isURLsafe}
                        onChange={() => setIsURLsafe(!isURLsafe)}
                        type="checkbox"
                        className="peer hidden"
                    />
                    <span

                        className="w-5 h-5 rounded-md border-2 border-gray-300 flex items-center justify-center
               peer-checked:bg-indigo-600 peer-checked:border-indigo-600
               transition-all duration-200"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="white"
                            className="w-3 h-3 opacity-0 peer-checked:opacity-100 transition-opacity duration-150"
                        >
                            <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                    <span>URL-safe encoding</span>
                </label>



            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-4">
                <button
                    onClick={() => handleSubmit()}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition">
                    {mode === "encode" ? "Encode" : "Decode"}
                </button>
                <button
                    onClick={() => handleclear()}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg font-medium transition">
                    Clear
                </button>
            </div>

            {/* Output */}
            <div className="w-full max-w-3xl">
                <label className="block text-gray-700 font-medium mb-2">Result:</label>
                <textarea
                    rows="5"
                    readOnly
                    value={result || ""}
                    placeholder="Your result will appear here..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:outline-none resize-none"
                />
            </div>
        </div>
    );
};

export default Base64Tool;
