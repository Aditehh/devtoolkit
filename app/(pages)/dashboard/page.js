"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const page = () => {



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
    <div className='pt-30'>
      {session.user.email}
    </div>
  )
}

export default page
