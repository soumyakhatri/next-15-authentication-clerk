"use client"

import { useAuth, useUser } from "@clerk/nextjs"

export default function ClientPage() {
    const authObj = useAuth()
    // const { userId, isSignedIn, isLoaded, signOut, sessionId, getToken } = authObj
    const userObj = useUser()
    // const { isLoaded: userLoaded, user, isSignedIn: isUserSignedIn } = userObj
    
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">useAuth and useUser Client Component</h1>

            <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">useAuth hook return the following:</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        {authObj && Object.keys(authObj).length && Object.keys(authObj).map((el, i) => (
                            <li key={i} className="hover:text-gray-800 transition-colors">
                                {el}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">useUser hook returns the following:</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        {userObj && Object.keys(userObj).length && Object.keys(userObj).map((el, i) => (
                            <li key={i} className="hover:text-gray-800 transition-colors">
                                {el}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

// Here's the key differences between useAuth and useUser from Clerk:

// useAuth is used when you need:
// Authentication status (isSignedIn, isLoaded)
// Session management functions (signOut, signIn)
// Session token information
// Basic authentication flow control

// useUser is used when you need:
// User profile data (name, email, image, etc.)
// User metadata
// User management functions (update profile, etc.)
// Detailed user information