"use client";

import React from "react";

export default function CompleteProfilePage() {
    return (
        <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-10">
                {/* Header */}
                <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                    Complete Your Profile
                </h1>
                <p className="text-gray-600 text-center mb-8">
                    Add your username, profile picture, and more to get started.
                </p>

                {/* Profile Picture Upload */}
                <div className="flex flex-col items-center mb-8">
                    <div className="relative w-32 h-32">
                        <input
                            type="file"
                            accept="image/*"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-full"
                        />
                        <div className="w-32 h-32 rounded-full border-2 border-gray-300 flex items-center justify-center overflow-hidden hover:border-indigo-500 transition">
                            <span className="text-gray-400 text-sm text-center">
                                Click to upload
                            </span>
                        </div>
                    </div>
                </div>

                {/* Username Input */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                        Username
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your username"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    />
                </div>

                {/* Bio Input */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Bio (Optional)</label>
                    <textarea
                        rows="4"
                        placeholder="Write a short bio..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition resize-none"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition">
                    Save Profile
                </button>
            </div>
        </div>
    );
}
