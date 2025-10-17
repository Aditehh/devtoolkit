"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession()



  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-slate-200 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold tracking-tight text-slate-900">
          DevToolkit<span className="text-indigo-500">⚙️</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">

          {!session &&

            <Link href="/" className="hover:text-indigo-500 transition-colors">Home</Link>
          }
          {session &&
            <Link href="/dashboard" className="hover:text-indigo-500 transition-colors">Dashboard</Link>

          }
          <Link href="/tools" className="hover:text-indigo-500 transition-colors">Tools</Link>
          <Link href="/about" className="hover:text-indigo-500 transition-colors">About</Link>

          <a
            href="https://github.com/yourusername/devtoolkit"
            target="_blank"
            className="text-slate-700 hover:text-indigo-500 transition-colors"
          >
            GitHub ↗
          </a>
          {session && <button
            onClick={() => signOut("github")}
          >
            logout
          </button>}
          {!session &&

            <Link href={"/login"}>
              <button
                className="px-4 py-2 rounded-lg font-medium  bg-indigo-600  text-white  hover:bg-indigo-700 focus:outline-none focus:ring-2  focus:ring-indigo-500 focus:ring-offset-1 transition-all  duration-200  ease-in-out"
              >
                Login
              </button>

            </Link>
          }
        </div>



        {/* Mobile Button */}
        <button
          className="md:hidden text-slate-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Dropdown */}
        {open && (
          <div className="absolute top-16 left-0 w-full bg-white/95 border-t border-slate-200 shadow-lg flex flex-col items-center py-5 gap-3 md:hidden text-sm">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/tools" onClick={() => setOpen(false)}>Tools</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <a
              href="https://github.com/yourusername/devtoolkit"
              target="_blank"
              onClick={() => setOpen(false)}
              className="text-indigo-600 font-medium"
            >
              GitHub ↗
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
