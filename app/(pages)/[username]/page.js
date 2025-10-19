"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

import profilePlaceholder from "@/public/profileplaceholder.png"; // import local image

export default function ProfilePage() {
  const params = useParams();
  const username = params.username;

  const [Profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      setLoading(true);
      try {
        const res = await fetch(`/api/profile/${username}`);
        if (!res.ok) {
          console.error("Failed to fetch profile");
          setProfile(null);
        } else {
          const data = await res.json();
          setProfile(data);
        }
      } catch (err) {
        console.error("Error fetching profile:", err);
        setProfile(null);
      } finally {
        setLoading(false); // always turn off loading
      }
    }

    if (username) fetchProfile();
  }, [username]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="min-h-screen pt-20 bg-gray-50 flex flex-col items-center py-16 px-4">
      {/* Profile Card */}
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-lg p-10 flex flex-col items-center">
        {/* Profile Picture */}
        <div className="relative w-32 h-32 mb-6">
          <Image
            src={Profile?.profileImage || profilePlaceholder}
            alt="Profile Picture"
            width={128}
            height={128}
            className="rounded-full object-cover border border-gray-300"
          />
        </div>

        {/* Username */}
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">
          {Profile?.username || "Your Name"}
        </h1>

        {/* Bio */}
        <p className="text-gray-600 text-center mb-6">
          {Profile?.bio || "This is your personal bio. You can describe yourself here."}
        </p>

        {/* Edit Profile Button */}
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-xl transition">
          Edit Profile
        </button>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 my-8"></div>

        {/* Tools Section */}
        <div className="w-full">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">
            Your Tools
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {/* Tool Cards */}
            {["T1", "T2", "T3"].map((tool, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex flex-col items-center hover:shadow-md transition"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-full mb-2 flex items-center justify-center text-indigo-600 font-bold">
                  {tool}
                </div>
                <p className="text-gray-700 text-sm text-center">Tool {index + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
