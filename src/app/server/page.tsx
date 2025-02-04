import { auth, currentUser } from "@clerk/nextjs/server"

export default async function Dashboard() {
    const authObj = await auth()
    const user = await currentUser()

    if(!authObj.userId){
        return null
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Server Component</h1>
            
            <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Auth Object Properties</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        {authObj && Object.keys(authObj).length && Object.keys(authObj).map((el, i) => (
                            <li key={i} className="hover:text-gray-800 transition-colors">
                                {el}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Current User Properties</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        {user && Object.keys(user).length && Object.keys(user).map((el, i) => (
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

// 1. auth()
// Returns basic authentication information (like userId, sessionId, sessionClaims)
// Lightweight and fast - only fetches essential auth data
// Best used when you just need to check if a user is authenticated or get their ID
// Commonly used for protecting routes and basic auth checks
// Returns null values if user is not authenticated

// 2. currentUser()
// Returns the complete user object with all user properties
// More comprehensive but heavier call - includes full user profile data
// Contains detailed information like:
// User profile (name, email, profile picture)
// Account settings
// Custom user metadata
// Authentication methods
// Other user-specific data
// Best used when you need detailed user information
// Returns null if user is not authenticated

// Best Practices:
// Use auth() for simple auth checks and when you only need the user ID
// Use currentUser() when you need to display or work with user profile data
// For performance reasons, prefer auth() if you don't need the full user object