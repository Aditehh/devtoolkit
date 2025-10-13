"use client";
import { useState } from "react";

export default function PasswordGeneratorUI() {
    const [length, setLength] = useState(12);
    const [includeUpper, setIncludeUpper] = useState(false)
    const [includeSymbols, setIncludeSymbols] = useState(false)
    const [includeNumbers, setIncludeNumbers] = useState(false)
    const [password, setPassword] = useState("")







    const handlegenerate = () => {

        let chars = "abcdefghijklmnopqrwxys";
        if (includeUpper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (includeNumbers) chars += "0123456789";
        if (includeSymbols) chars += "!@#$%^&*()_+{}[]:';<>?,./`~";


        if (!chars) {
            alert("nothing to select from")
        }

        if (length < 6) {
            alert("password cant be that short")
        }

        let result = "";
        for (let i = 0; i < length; i++) {
            const randIndex = Math.floor(Math.random() * chars.length)
            result += chars[randIndex]
        }

        setPassword(result)
        console.log(result)


    }


    const handlecopy = () => {
        navigator.clipboard.writeText(password)
        alert("copied to clipboard")
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    Password Generator
                </h1>

                {/* Generated password output */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Generated Password:</label>


                    <input
                        type="text"
                        readOnly
                        value={password || ""}
                        placeholder="Your password will appear here"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100 text-gray-800"
                    />
                </div>

                {/* Password length selector */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Password Length: {length}</label>
                    <input
                        type="range"
                        min="6"
                        max="32"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        className="w-full"
                    />
                </div>

                {/* Options */}
                <div className="mb-4 space-y-2">
                    <label className="flex items-center space-x-2">
                        <input
                            checked={includeUpper}
                            onChange={(e) => setIncludeUpper(e.target.checked)}
                            type="checkbox" className="h-4 w-4 text-indigo-600" />
                        <span className="text-gray-700">Include Uppercase Letters</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            checked={includeNumbers}
                            onChange={(e) => setIncludeNumbers(e.target.checked)}
                            type="checkbox" className="h-4 w-4 text-indigo-600" />
                        <span className="text-gray-700">Include Numbers</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            checked={includeSymbols}
                            onChange={(e) => setIncludeSymbols(e.target.checked)}
                            type="checkbox" className="h-4 w-4 text-indigo-600" />
                        <span className="text-gray-700">Include Symbols</span>
                    </label>
                </div>


                <div className="flex flex-col gap-5">


                    {/* Generate Button */}
                    <button
                        onClick={() => handlegenerate()}

                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition">
                        Generate Password
                    </button>

                    <button
                        onClick={() => handlecopy()}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition">
                        Copy Password
                    </button>

                </div>


            </div>
        </div>
    );
}
