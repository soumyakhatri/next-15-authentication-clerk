"use client"

import { useState } from "react"
import { useAuth } from "@clerk/nextjs"
export default function Counter() {
    const [count, setCount] = useState(0)
    const { isLoaded, isSignedIn } = useAuth()

    if (!isLoaded || !isSignedIn) return null

    return (
        <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-gray-100">
            <h2 className="text-xl font-semibold text-gray-600">This client component will only be shown in the user is signed in</h2>
            <h2 className="text-sm font-semibold text-gray-600">We are using useAuth hooks isSignedIn property and isLoaded property to check if the user is signed in</h2>
            <p className="text-2xl font-semibold text-gray-800">Count: {count}</p>
            <button 
                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
        </div>
    )
}