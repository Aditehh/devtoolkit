"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import profilePlaceholder from "@/public/profileplaceholder.png";

export default function ProfilePage() {
  const { username } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch(`/api/profile/${username}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          cache: "no-store", // ensures fresh fetch each time
        });

        if (!res.ok) {
          const errorText = await res.text();
          console.error("Response error:", errorText);
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setProfile(data);

      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    }

    if (username) fetchProfile();
  }, [username]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!profile) return <p>Profile not found.</p>;

  return (
    <div className="min-h-screen pt-30 bg-gray-50 flex flex-col items-center py-16 px-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-lg p-10 flex flex-col items-center">
        <div className="relative w-32 h-32 mb-6">
          <Image
            src={profile.profileImage || "@/public/profilePlaceholder"}
            alt="Profile Picture"
            width={128}
            height={128}
            className="rounded-full object-cover border border-gray-300"
          />
        </div>

        <h1 className="text-3xl font-semibold text-gray-900 mb-2">
          {profile.username}
        </h1>

        <p className="text-gray-600 text-center mb-6">
          {profile.bio || "This user hasn’t added a bio yet."}
        </p>

        <div className="flex flex-col items-center gap-3">
          <p className="text-gray-400 text-center">
            Want to edit your profile? Go to settings
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-xl transition">
            <Link 
            href={"/settings"}
            >
            Settings
            </Link>
          </button>
        </div>


      </div>
    </div>
  );
}
