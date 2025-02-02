import Counter from "@/components/counter";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Home() {
  const authObj = await auth()
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 tracking-tight">
          Authentication With Clerk Examples
        </h1>
        
        <div className="space-y-6">
          {authObj.userId && (
            <Link 
              href="/server" 
              className="block w-full sm:w-96 mx-auto p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-blue-500 text-gray-700 hover:text-blue-600"
            >
              Auth And Current User In Server Component
            </Link>
          )}
          
          {authObj.userId && (
            <Link 
              href="/client" 
              className="block w-full sm:w-96 mx-auto p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-blue-500 text-gray-700 hover:text-blue-600"
            >
              useAuth And useUser In Client Component
            </Link>
          )}
          <Counter />
        </div>
      </div>
    </div>
  );
}
