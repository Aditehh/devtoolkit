"use client"
import React from 'react'
import { useState } from 'react'

const page = () => {

    const [pattern, setpattern] = useState("") //regex pattern
    const [inputText, setInputText] = useState("") //text to test



    const handletesting = () => {

    }

    const handleClear = () => {
        setInputText("")
        setpattern("")
    }






    return (
        <div className='pt-20'>
            <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
                {/* Page title */}
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Regex Tester</h1>

                {/* Regex pattern input */}
                <div className="w-full max-w-3xl mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Regex Pattern:</label>
                    <input
                        type="text"
                        value={pattern}
                        required
                        onChange={(e) => setpattern(e.target.value)}
                        placeholder="/your-regex-here/"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                {/* Input text area */}
                <div className="w-full max-w-3xl mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Input Text:</label>
                    <textarea
                        rows="6"
                        value={inputText}
                        required
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Type your text here..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
                    ></textarea>
                </div>

                {/* Matches output area */}
                <div className="w-full max-w-3xl mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Matches:</label>
                    <div className="w-full min-h-[80px] p-4 border border-gray-300 rounded-lg bg-white text-gray-800">
                        {/* Highlighted matches will appear here later */}
                        <p className="text-gray-400">Matches will appear here...</p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex space-x-4">
                    <button
                        onClick={() => handletesting()}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition">
                        Test Regex
                    </button>
                    <button
                        onClick={() => handleClear()}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg font-medium transition">
                        Clear
                    </button>
                </div>
            </div>

        </div>
    )
}

export default page
