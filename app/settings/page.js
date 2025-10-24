"use client";

import { useState } from "react";
import Image from "next/image";

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("profile");

    return (
        <main className="min-h-screen pt-20 bg-gradient-to-b from-slate-50 to-white text-slate-800">
            <div className="max-w-5xl mx-auto px-6 py-12">
                <h1 className="text-3xl font-semibold tracking-tight mb-8 text-slate-900">
                    Settings
                </h1>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className="md:w-1/4 space-y-2">
                        {["profile", "account", "appearance", "privacy"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`w-full text-left px-4 py-2 rounded-xl transition-all duration-200 ${activeTab === tab
                                        ? "bg-white shadow-sm border border-slate-200 text-indigo-600"
                                        : "text-slate-600 hover:bg-slate-100"
                                    }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </aside>

                    {/* Main content */}
                    <section className="flex-1 bg-white rounded-2xl border border-slate-200 shadow-sm p-8 transition-all duration-300">
                        {activeTab === "profile" && (
                            <div className="space-y-6">
                                <h2 className="text-xl font-semibold text-slate-900">
                                    Profile
                                </h2>
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="/default-avatar.png"
                                        alt="Profile picture"
                                        width={80}
                                        height={80}
                                        className="rounded-full border border-slate-200"
                                    />
                                    <div>
                                        <button className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-sm font-medium text-slate-700 transition">
                                            Change Photo
                                        </button>
                                        <p className="text-xs text-slate-500 mt-1">
                                            PNG or JPG, max 2MB
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">
                                            Display Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Aditya Aryal"
                                            className="w-full border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">
                                            Username
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="ace"
                                            className="w-full border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "account" && (
                            <div className="space-y-6">
                                <h2 className="text-xl font-semibold text-slate-900">
                                    Account
                                </h2>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        className="w-full border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">
                                        Change Password
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>
                            </div>
                        )}

                        {activeTab === "appearance" && (
                            <div className="space-y-6">
                                <h2 className="text-xl font-semibold text-slate-900">
                                    Appearance
                                </h2>
                                <div className="flex items-center justify-between py-2">
                                    <span className="text-slate-700">Theme</span>
                                    <select className="border border-slate-200 rounded-lg px-3 py-2 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                        <option>Light</option>
                                        <option>Dark</option>
                                        <option>System</option>
                                    </select>
                                </div>
                            </div>
                        )}

                        {activeTab === "privacy" && (
                            <div className="space-y-6">
                                <h2 className="text-xl font-semibold text-slate-900">
                                    Privacy
                                </h2>
                                <div className="flex items-center justify-between py-2">
                                    <span className="text-slate-700">Make profile public</span>
                                    <input type="checkbox" className="w-5 h-5 accent-indigo-500" />
                                </div>
                                <div className="flex items-center justify-between py-2">
                                    <span className="text-slate-700">Allow email notifications</span>
                                    <input type="checkbox" className="w-5 h-5 accent-indigo-500" />
                                </div>
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </main>
    );
}
