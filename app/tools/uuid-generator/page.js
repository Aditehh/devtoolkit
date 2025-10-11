"use client"
import { AlignRight } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import { v1 as uuidv1, v4 as uuidv4, v7 as uuidv7 } from 'uuid';









const page = () => {

    const [selectedVersion, setselectedVersion] = useState("")
    const [uuidGenerated, setuuidGenerated] = useState("")

    const handleGenerate = () => {

        if (selectedVersion === "v1") {
            console.log(selectedVersion)
            const uuid1 = uuidv1();
            console.log(uuid1)
            setuuidGenerated(uuid1)
        }
        if (selectedVersion === "v4") {
            console.log(selectedVersion)
            const uuid4 = uuidv4();
            console.log(uuid4)
            setuuidGenerated(uuid4)


        }
        if (selectedVersion === "v7") {
            console.log(selectedVersion)
            const uuid7 = uuidv7();
            console.log(uuid7)
            setuuidGenerated(uuid7)

        }
    }





    return (
        <main className="max-w-3xl mx-auto px-6 pt-24 pb-16">
            <h1 className="text-3xl font-bold text-slate-900 mb-3 text-center">
                UUID Generator
            </h1>
            <p className="text-slate-600 text-center mb-10">
                Generate unique UUIDs instantly — choose your preferred version.
            </p>

            <div className="bg-white border border-slate-200 text-center rounded-2xl p-8 shadow-sm">
                <label
                    htmlFor="uuidVersion"
                    className="block text-slate-700 font-medium mb-3 text-lg"
                >
                    Select preferred UUID Version
                </label>

                <select
                    value={selectedVersion}
                    onChange={(e) => setselectedVersion(e.target.value)}
                    id="uuidVersion"
                    className="w-120 px-4 py-2 rounded-xl border border-gray-300 bg-white text-gray-800 font-semibold shadow-sm hover:shadow-md hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 ease-in-out cursor-pointer mx-auto block appearance-none"
                >
                    <option value="">Version?</option>
                    <option value="v1">🔹 Version 1</option>
                    <option value="v4">💠 Version 4 (Recommended)</option>
                    <option value="v7">⚡ Version 7</option>

                </select>




                <div className="mt-8 flex justify-center">
                    <button
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition"
                        onClick={() => handleGenerate()}
                    >
                        Generate UUID
                    </button>
                </div>


                {/* <h3 className='mt-4'>Your required UUID is:</h3> */}


                {uuidGenerated &&
                    <p className="mt-4 font-mono text-lg text-gray-700">{uuidGenerated}</p>}





            </div>
            <div>
                what really are uuid
            </div>
        </main>

    )
}

export default page
