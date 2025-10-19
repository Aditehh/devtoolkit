"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Image from 'next/image'


const page = () =>  {



  const { data: session, status } = useSession();
  const router = useRouter();



  

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])



  if (status === "loading") {
    return <div className='text-center pt-30'>
      Loading...
    </div>
  }

  if (!session) {
    return <div className='pt-30 text-center'>
      You are not logged in
    </div>


  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 pt-20">
      {/* Header */}
      <header className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-semibold text-gray-900">
          Welcome back, <span className="text-indigo-600">{session.user.email}</span>
        </h1>
        <div className="flex items-center gap-4">
          {/* Profile thumbnail */}
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300">
            <Image
              src="/profile-placeholder.jpg"
              alt="Profile"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
        </div>
      </header>

      {/* Tools Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Tool Card */}
        {["Password Generator", "Regex Tester", "UUID Generator", "JSON Formatter", "Base64 Tool"].map((tool) => (
          <div
            key={tool}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition duration-300 cursor-pointer"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{tool}</h2>
            <p className="text-gray-500 text-sm mb-4">
              Quick access to {tool.toLowerCase()}.
            </p>
            <button className="mt-auto px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
              Open
            </button>
          </div>
        ))}
      </section>

      {/* Recent Activity */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Recent Activity
        </h2>
        <div className="space-y-4">
          {["Generated a password", "Tested a regex", "Created a UUID"].map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-4 flex justify-between items-center hover:shadow-md transition"
            >
              <p className="text-gray-700">{activity}</p>
              <span className="text-gray-400 text-sm">Just now</span>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  )
}

export default page
