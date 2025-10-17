// "use client";


// export default function LoginPage() {
//   return (
//     <div className="flex h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
//       {/* Left Section - Login Form */}
//       <div className="w-full md:w-1/2 flex flex-col justify-center px-10 md:px-20 lg:px-32">
//         <h1 className="text-4xl font-extrabold mb-6 tracking-tight text-indigo-400">
//           Welcome to <span className="text-indigo-500">DevToolkit</span>
//         </h1>
//         <p className="text-slate-300 mb-8 text-sm">
//           Log in to access your personalized tools and workspace.
//         </p>

//         <form className="space-y-5">
//           <div>
//             <label className="block text-sm font-medium mb-2 text-slate-300">
//               Email
//             </label>
//             <input
//               type="email"
//               className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="you@example.com"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-2 text-slate-300">
//               Password
//             </label>
//             <input
//               type="password"
//               className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="••••••••"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
//           >
//             Log In
//           </button>
//         </form>

//         <div className="mt-8 flex flex-col gap-3">
//           <button className="flex items-center justify-center gap-3 border border-slate-700 py-2 rounded-lg hover:bg-slate-800 transition-colors duration-200">
//             {/* <img src alt="GitHub" className="w-5 h-5" /> */}
//             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
//               <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
//             </svg>

//             Connect with GitHub
//           </button>
//           <button className="flex items-center justify-center gap-3 border border-slate-700 py-2 rounded-lg hover:bg-slate-800 transition-colors duration-200">
//             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
//               <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
//             </svg>            Connect with Facebook
//           </button>
//           <button className="flex items-center justify-center gap-3 border border-slate-700 py-2 rounded-lg hover:bg-slate-800 transition-colors duration-200">
//             <img src="/icons/x.svg" alt="X" className="w-5 h-5" />
//             Connect with X
//           </button>
//         </div>

//         <p className="mt-6 text-slate-500 text-sm text-center">
//           Don't have an account?{" "}
//           <a href="/signup" className="text-indigo-400 hover:text-indigo-300">
//             Sign up
//           </a>
//         </p>
//       </div>

//       {/* Right Section - Image */}
//       <div className="hidden md:flex w-1/2 bg-slate-950 items-center justify-center relative overflow-hidden">
//         <img
//           src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
//           alt="Dev Toolkit Illustration"
//           className="absolute inset-0 w-full h-full object-cover opacity-60"
//         />
//         <div className="absolute inset-0 bg-gradient-to-tr from-indigo-800/30 via-slate-900/70 to-transparent" />
//         <h2 className="relative z-10 text-4xl font-bold text-center leading-tight text-indigo-400">
//           Code Smarter, <br /> Build Faster.
//         </h2>
//       </div>
//     </div>
//   );
// }


"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";




import Image from "next/image";
// import { Github, Twitter } from "lucide-react";

export default function LoginPage() {

  const { data: session, status } = useSession();

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }






  return (
    <div className="flex h-screen">
      {/* Left side - Login form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white dark:bg-slate-900 px-8 md:px-16">
        <div className="w-full max-w-sm space-y-6">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white text-center">
            Welcome back to <span className="text-indigo-600">DevToolkit ⚙️</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-center text-sm">
            Sign in to access your tools, preferences, and saved data.
          </p>

          <div className="space-y-4 mt-8">
            {/* GitHub Login */}
            <button
              onClick={() => signIn("github")}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            >
              {/* <Github size={20} /> */}
              <span>Continue with GitHub</span>
            </button>

            {/* X (Twitter) Login */}
            <button
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            >
              {/* <Twitter size={20} /> */}
              <span>Continue with X</span>
            </button>
          </div>

          <p className="text-xs text-slate-500 text-center mt-6">
            By continuing, you agree to our{" "}
            <span className="text-indigo-600 hover:underline cursor-pointer">
              Terms & Privacy
            </span>
            .
          </p>
        </div>
      </div>

      {/* Right side - Illustration */}
      <div className="hidden md:flex w-1/2 bg-slate-950 items-center justify-center relative overflow-hidden">
//         <img
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
