"use client";

import { useState, useRef, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const { username } =  useParams();
  const { data: session, status } = useSession();
  const router = useRouter();
  const [profile, setProfile] = useState(null);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Fetch profile data
  // useEffect(() => {
  //   // if (status === "authenticated" && session?.user?.email) {
  //   const fetchProfile = async () => {
  //     try {
  //       const res = await fetch(`/api/profile/${username}`, {
  //         method: "GET",
  //         headers: { "Content-Type": "application/json" },
  //         cache: "no-store",
  //       });

  //       if (!res.ok) {
  //         console.error("Error fetching profile:", await res.text());
  //         return;
  //       }

  //       const data = await res.json();
  //       setProfile(data);
  //     } catch (err) {
  //       console.error("Fetch error:", err);
  //     }
  //   };

  //   fetchProfile();
  //   // }
  // }, [session, status]);


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
        // setLoading(false);
      }
    }

    if (username) fetchProfile();
  }, [username]);



  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-slate-200/40 bg-white/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="text-lg md:text-xl font-semibold tracking-tight text-slate-900 hover:text-indigo-500 transition">
          dev<span className="text-indigo-500">Toolkit</span>
        </Link>

        {/* Center: Links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-700 font-medium">
          <Link href="/tools" className="hover:text-slate-900 transition">Tools</Link>
          <Link href="/projects" className="hover:text-slate-900 transition">Projects</Link>
        </div>

        {/* Right: Profile Button */}
        {status === "authenticated" && (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 rounded-full bg-white/70 border border-slate-200 px-3 py-1.5 shadow-sm hover:shadow-md hover:bg-white transition-all duration-200"
            >
              <Image
                src={profile.profileImage || "@/public/profilePlaceholder"}
                alt="Profile"
                width={32}
                height={32}
                className="rounded-full object-cover"
              />

              <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-44 bg-white/90 backdrop-blur-md border border-slate-200/60 rounded-2xl shadow-lg py-2 animate-fadeIn">
                <Link href={`/${profile.username || ""}`}
                  className="block px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition">
                  {profile.username || "Profile"}
                </Link>

                <Link href="/settings" className="block px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition">
                  Settings
                </Link>
                <hr className="border-slate-200/50 my-1" />
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="block w-full text-left px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}

        {/* Login Button */}
        {status === "unauthenticated" && (
          <Link href="/login">
            <button className="px-4 py-2 rounded-lg font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}
