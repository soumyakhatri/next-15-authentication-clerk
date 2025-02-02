import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const NavigationFour = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <span className="text-2xl font-bold text-gray-800">Separate User Profile Page With Separate Route</span>
                    </div>

                    <div className="flex gap-2">
                        <SignedOut>
                            <SignInButton mode="modal" />
                        </SignedOut>


                        <SignedIn>
                            <Link
                                href="/user-profile"
                                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200 ease-in-out"
                            >
                                Profile
                            </Link>
                            <SignOutButton />
                        </SignedIn>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavigationFour;
