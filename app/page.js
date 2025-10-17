import Image from "next/image";

export default function Home() {
  return (
    <>

      <section className="flex flex-col items-center justify-center text-center min-h-[85vh] max-w-4xl mx-auto px-6">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-400 via-white to-gray-400 -z-10" />

        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
          A Minimal Toolkit for Every Developer
        </h1>

        <p className="text-gray-600 mt-5 text-lg sm:text-xl max-w-2xl">
          Format JSON, generate UUIDs, convert timestamps, and more — all in one elegant, lightweight platform.
        </p>

        <div className="flex flex-row gap-4">


          <a
            href="/tools"
            className="mt-8 inline-block bg-gray-800 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-black transition-all hover:scale-[1.02]"
          >
            Explore Tools
          </a>

          {/* <a
            href="/login"
            className="mt-8 inline-block bg-gray-800 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-black transition-all hover:scale-[1.02]"
          >
            Get Started
          </a> */}


        </div>

        {/* if it directly takes the users to the tools page when will the login page come and what would it even be for if an user can use the tools without loggin in */}

        {/* Floating Tags */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 text-black">
          {["JSON Formatter", "Color Picker", "Base64 Converter", "UUID Generator"].map((tool, i) => (
            <span
              key={i}
              className="px-4 py-2 text-sm bg-white border border-slate-200 rounded-full shadow-sm hover:shadow-md transition-all"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>




    </>
  );
}
