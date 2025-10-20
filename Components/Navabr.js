"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (status === "authenticated" && session?.user?.username) {
      async function fetchProfile() {
        try {
          const res = await fetch(`/api/profile/${session.user.username}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            cache: "no-store",
          });

          if (!res.ok) {
            const errorText = await res.text();
            console.error("Error fetching profile:", errorText);
            throw new Error(`HTTP error: ${res.status}`);
          }

          const data = await res.json();
          setProfile(data);
        } catch (error) {
          console.error("Failed to fetch profile:", error);
        }
      }

      fetchProfile();
    }
  }, [session, status]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-slate-200 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight text-slate-900">
          DevToolkit<span className="text-indigo-500">⚙️</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/tools" className="hover:text-indigo-500 transition-colors">Tools</Link>
          <Link href="/about" className="hover:text-indigo-500 transition-colors">About</Link>
          <a
            href="https://github.com/yourusername/devtoolkit"
            target="_blank"
            className="text-slate-700 hover:text-indigo-500 transition-colors"
          >
            GitHub↗
          </a>

          {session ? (
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-3 py-1 bg-white/80 hover:bg-white shadow-sm border border-gray-200 rounded-xl transition-all duration-200"
              >
                <img
                  src={profile?.avatar || "/default-avatar.png"}
                  alt="profile"
                  className="w-8 h-8 rounded-full border border-gray-300 object-cover"
                />
                <ChevronDown
                  className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                />
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-100 rounded-xl shadow-md py-1 z-50">
                  {profile && (
                    <Link
                      href={`/${profile.username}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition"
                    >
                      Profile
                    </Link>
                  )}
                  <Link
                    href="/settings"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition"
                  >
                    Settings
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="block w-full text-left px-4 py-2 text-red-500 hover:bg-red-50 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/login">
              <button className="px-4 py-2 rounded-lg font-medium bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 transition-all duration-200 ease-in-out">
                Login
              </button>
            </Link>
          )}
        </div>

        <button className="md:hidden text-slate-700" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  );
}
