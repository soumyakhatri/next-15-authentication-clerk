import { SignIn } from "@clerk/nextjs";

export default function SignInButtonComponent() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-start pt-20 bg-gray-50 p-4">
            <div className="max-w-md w-full space-y-8 text-center">
                <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                    {`This page is opening in our own domain (localhost:3000 in case of development) instead of clerk's domain`}
                </h1>
                <SignIn />
            </div>
        </div>
    )
}