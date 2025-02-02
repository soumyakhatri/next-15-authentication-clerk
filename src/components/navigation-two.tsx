import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";

const NavigationTwo = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <span className="text-2xl font-bold text-gray-800">Either Sign In or Sign Out</span>
                    </div>
                    <SignedOut>
                        <SignInButton mode="modal" />
                    </SignedOut>
                    <SignedIn>
                        <SignOutButton />
                    </SignedIn>
                </div>
            </div>
        </nav>
    );
};

export default NavigationTwo;
