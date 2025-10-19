"use client";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function ProfilePage() {
  const params = useParams();
  const username = params.username; // get username from URL

  return (
    <div className="min-h-screen pt-20 bg-gray-50 flex flex-col items-center py-16 px-4">
      {/* Profile Card */}
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-lg p-10 flex flex-col items-center">
        {/* Profile Picture */}
        <div className="relative w-32 h-32 mb-6">
          <Image
            src="/profileplaceholder.png"
            alt="Profile Picture"
            width={128}
            height={128}
            className="rounded-full object-cover border border-gray-300"
          />
        </div>

        {/* Username */}
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">{ username || "Your Name"}</h1>

        {/* Bio */}
        <p className="text-gray-600 text-center mb-6">
          This is your personal bio. You can describe yourself here, your skills, or anything about you.
        </p>

        {/* Edit Profile Button */}
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-xl transition">
          Edit Profile
        </button>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 my-8"></div>

        {/* Tools Section */}
        <div className="w-full">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">Your Tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {/* Tool Cards */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex flex-col items-center hover:shadow-md transition">
              <div className="w-12 h-12 bg-indigo-100 rounded-full mb-2 flex items-center justify-center text-indigo-600 font-bold">
                T1
              </div>
              <p className="text-gray-700 text-sm text-center">Tool 1</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex flex-col items-center hover:shadow-md transition">
              <div className="w-12 h-12 bg-indigo-100 rounded-full mb-2 flex items-center justify-center text-indigo-600 font-bold">
                T2
              </div>
              <p className="text-gray-700 text-sm text-center">Tool 2</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex flex-col items-center hover:shadow-md transition">
              <div className="w-12 h-12 bg-indigo-100 rounded-full mb-2 flex items-center justify-center text-indigo-600 font-bold">
                T3
              </div>
              <p className="text-gray-700 text-sm text-center">Tool 3</p>
            </div>
            {/* Add more tools as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}
