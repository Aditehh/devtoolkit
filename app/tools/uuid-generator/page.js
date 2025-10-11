import React from 'react'

const page = () => {
    return (
        <main className="max-w-3xl mx-auto px-6 pt-24 pb-16">
            <h1 className="text-3xl font-bold text-slate-900 mb-3 text-center">
                UUID Generator
            </h1>
            <p className="text-slate-600 text-center mb-10">
                Generate unique UUIDs instantly — choose your preferred version.
            </p>

            <div className="bg-white border border-slate-200 text-center rounded-2xl p-8 shadow-sm">
                <label
                    htmlFor="uuidVersion"
                    className="block text-slate-700 font-medium mb-3 text-lg"
                >
                    Select preferred UUID Version
                </label>

                <select
                    id="uuidVersion"
                    className="w-120 px-4 py-2 rounded-xl border border-gray-300 bg-white text-gray-800 font-semibold shadow-sm hover:shadow-md hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 ease-in-out cursor-pointer mx-auto block appearance-none"
                >
                    <option value="v1">🔹 Version 1</option>
                    <option value="v4">💠 Version 4 (Recommended)</option>
                    <option value="v7">⚡ Version 7</option>
                </select>




                <div className="mt-8 flex justify-center">
                    <button
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition"
                    >
                        Generate UUID
                    </button>
                </div>
            </div>
        </main>

    )
}

export default page
