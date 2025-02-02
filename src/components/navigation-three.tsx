import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const NavigationThree = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <span className="text-2xl font-bold text-gray-800">User Button</span>
                    </div>

                    {/* Sign In Button */}
                    <div className="flex gap-2">
                        <SignedOut>
                            <SignInButton mode="modal" />
                        </SignedOut>
                        <UserButton/>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavigationThree;
