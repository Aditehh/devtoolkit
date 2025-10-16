"use client";

export default function LoginPage() {
  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Left Section - Login Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-10 md:px-20 lg:px-32">
        <h1 className="text-4xl font-extrabold mb-6 tracking-tight text-indigo-400">
          Welcome to <span className="text-indigo-500">DevToolkit</span>
        </h1>
        <p className="text-slate-300 mb-8 text-sm">
          Log in to access your personalized tools and workspace.
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2 text-slate-300">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-slate-300">
              Password
            </label>
            <input
              type="password"
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
          >
            Log In
          </button>
        </form>

        <div className="mt-8 flex flex-col gap-3">
          <button className="flex items-center justify-center gap-3 border border-slate-700 py-2 rounded-lg hover:bg-slate-800 transition-colors duration-200">
            <img src="/icons/github.svg" alt="GitHub" className="w-5 h-5" />
            Connect with GitHub
          </button>
          <button className="flex items-center justify-center gap-3 border border-slate-700 py-2 rounded-lg hover:bg-slate-800 transition-colors duration-200">
            <img src="/icons/facebook.svg" alt="Facebook" className="w-5 h-5" />
            Connect with Facebook
          </button>
          <button className="flex items-center justify-center gap-3 border border-slate-700 py-2 rounded-lg hover:bg-slate-800 transition-colors duration-200">
            <img src="/icons/x.svg" alt="X" className="w-5 h-5" />
            Connect with X
          </button>
        </div>

        <p className="mt-6 text-slate-500 text-sm text-center">
          Don’t have an account?{" "}
          <a href="/signup" className="text-indigo-400 hover:text-indigo-300">
            Sign up
          </a>
        </p>
      </div>

      {/* Right Section - Image */}
      <div className="hidden md:flex w-1/2 bg-slate-950 items-center justify-center relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
          alt="Dev Toolkit Illustration"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-800/30 via-slate-900/70 to-transparent" />
        <h2 className="relative z-10 text-4xl font-bold text-center leading-tight text-indigo-400">
          Code Smarter, <br /> Build Faster.
        </h2>
      </div>
    </div>
  );
}
