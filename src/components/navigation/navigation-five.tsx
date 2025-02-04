import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton } from "@clerk/nextjs";

const NavigationFive = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <span className="text-2xl font-bold text-gray-800">Customize Clerk</span>
                    </div>
                    <div className="flex gap-2">
                        <SignedOut>
                            <SignInButton>
                                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                    Log In
                                </button>
                            </SignInButton>

                            <SignUpButton>
                                <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-600 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                    Create an account
                                </button>
                            </SignUpButton>
                        </SignedOut>
                        <SignedIn>
                            <SignOutButton>
                                <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                                    Log Out
                                </button>
                            </SignOutButton>
                        </SignedIn>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavigationFive;
