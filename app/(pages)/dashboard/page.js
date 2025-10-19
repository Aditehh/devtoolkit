"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0e0e0f] to-[#1a1a1c] text-gray-100">
      {/* Mobile Sidebar Toggle */}
      {/* <div className="md:hidden fixed top-5 left-5 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg bg-white/10 backdrop-blur-md hover:bg-white/20 transition"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div> */}

      {/* Sidebar (Mobile Only) */}
      {/* <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-64 bg-white/10 backdrop-blur-2xl shadow-xl p-6 z-40 md:hidden"
          >
            <h2 className="text-lg font-semibold mb-6">Menu</h2>
            <ul className="space-y-4">
              <li className="hover:text-indigo-400 cursor-pointer">Dashboard</li>
              <li className="hover:text-indigo-400 cursor-pointer">Profile</li>
              <li className="hover:text-indigo-400 cursor-pointer">Settings</li>
              <li className="hover:text-indigo-400 cursor-pointer">Logout</li>
            </ul>
          </motion.aside>
        )}
      </AnimatePresence> */}

      {/* Main Dashboard Content */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
          Welcome back, <span className="text-indigo-400">Ace</span> 👋
        </h1>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl shadow-lg border border-white/10 hover:border-indigo-400/50 transition">
            <h2 className="text-xl font-semibold mb-2">Your Tools</h2>
            <p className="text-sm text-gray-400">
              Access your developer utilities and productivity boosters here.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl shadow-lg border border-white/10 hover:border-indigo-400/50 transition">
            <h2 className="text-xl font-semibold mb-2">Stats Overview</h2>
            <p className="text-sm text-gray-400">
              View usage analytics and project metrics in one place.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl shadow-lg border border-white/10 hover:border-indigo-400/50 transition">
            <h2 className="text-xl font-semibold mb-2">Quick Actions</h2>
            <p className="text-sm text-gray-400">
              Manage shortcuts for tasks, deployments, or tools.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl shadow-lg border border-white/10 hover:border-indigo-400/50 transition">
            <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
            <p className="text-sm text-gray-400">
              Keep track of your most recent tool usage or saved configs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl shadow-lg border border-white/10 hover:border-indigo-400/50 transition">
            <h2 className="text-xl font-semibold mb-2">Announcements</h2>
            <p className="text-sm text-gray-400">
              Updates, new features, and developer insights appear here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
