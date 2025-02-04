import { clerkClient } from "@clerk/nextjs/server";
import { removeRole, setRole } from "./actions";
import Form from "next/form";

export default async function AdminPage() {
    const client = await clerkClient()
    const users = await (await client.users.getUserList()).data

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="max-w-6xl mx-auto py-16 px-6">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Admin Dashboard</h1>
                    <h3 className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {`This page is protected by Clerk's middleware and only accessible to users with the admin role.`}
                    </h3>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">User Management</h2>
                    <ul className="space-y-6">
                        {users.map(user => (
                            <li key={user.id} className="flex items-center justify-between p-6 hover:bg-gray-50 rounded-xl border border-gray-200 transition-colors duration-200">
                                <span className="text-lg text-gray-700 font-semibold">{user.emailAddresses[0].emailAddress}</span>
                                <span className="text-lg text-gray-700 font-semibold">{(user.publicMetadata as { role?: string })?.role}</span>
                                <div className="flex gap-4">
                                    <Form action={removeRole}>
                                        <input type="hidden" value={user.id} name="id" />
                                        <button
                                            className="px-6 py-2.5 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-all duration-200 hover:shadow-md"
                                        >
                                            Remove Role
                                        </button>
                                    </Form>
                                
                                    <Form action={setRole}>
                                        <input type="hidden" value={user.id} name="id" />
                                        <input type="hidden" value={"admin"} name="role" />
                                        <button
                                            className="px-6 py-2.5 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-200 hover:shadow-md"
                                        >
                                            Make Admin
                                        </button>
                                    </Form>
                                    <Form action={setRole}>
                                        <input type="hidden" value={user.id} name="id" />
                                        <input type="hidden" value={"moderator"} name="role" /> 
                                        <button
                                            className="px-6 py-2.5 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-all duration-200 hover:shadow-md"
                                        >
                                            Make Moderator
                                        </button>
                                    </Form>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}