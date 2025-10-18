"use client";

import React from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";






export default function CompleteProfilePage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    const [username, setusername] = useState("")
    const [bio, setBio] = useState("")
    const [profileImage, setprofileImage] = useState(null)

    useEffect(() => {
        if (!session) {
            if (status === "unauthenticated") {
                router.push('/login')
            }
        }
    }, [status, router])






    const handleSaveProfile = async (e) => {
        e.preventDefault();

        const profileData = { username, bio, profileImage }
        try {
            const response = await fetch("/api/profile", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(profileData),
                credentials: "include",
            });

            if (response.ok) {
                const result = await response.json();
                console.log("profile saved:", result);

                setusername("")
                setBio("")
                setprofileImage(null)
            }
            else {
                console.error("Failed to save profile")
            }



        } catch (error) {
            console.error("Rrror", error)

        }
    }




    return (
        <form
            onSubmit={handleSaveProfile}
            className="min-h-screen pt-20 flex items-center justify-center bg-slate-200 px-4">
            <div className="max-w-2xl w-full bg-gray-100 rounded-2xl shadow-lg p-10">
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
                        {/* Upload input */}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) setprofileImage(URL.createObjectURL(file));
                            }}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-full z-10"
                        />

                        {/* Image preview */}
                        {profileImage ? (
                            <Image
                                src={profileImage}
                                alt="Profile"
                                width={128}
                                height={128}
                                className="w-32 h-32 rounded-full object-cover border border-gray-300"
                            />
                        ) : (
                            <div className="w-32 h-32 rounded-full border-2 border-gray-300 flex items-center justify-center overflow-hidden hover:border-indigo-500 transition">
                                <span className="text-gray-400 text-sm text-center">
                                    Click to upload
                                </span>
                            </div>
                        )}
                    </div>
                </div>


                {/* Username Input */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                        Username
                    </label>
                    <input
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                        type="text"
                        placeholder="Enter your username"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    />
                </div>

                {/* Bio Input */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Bio (Optional)</label>
                    <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        rows="4"
                        placeholder="Write a short bio..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition resize-none"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    // onClick={() => handleSaveProfile()}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition">
                    Save Profile
                </button>
            </div>
        </form>
    );
}
