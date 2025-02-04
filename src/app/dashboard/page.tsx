export default function Dashboard() {
    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>
            <div className="space-y-4">
                <h3 className="text-lg text-gray-700 leading-relaxed">
                    We have added NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/dashboard in env file therefore it is forcing the app to redirect to dashboard page after sign-in
                </h3>
                <h3 className="text-lg text-gray-700 leading-relaxed">
                    Without this env varibale the user would have gone to the url in redirect query in the Url
                </h3>
                <h3 className="text-lg text-gray-700 leading-relaxed">
                    If the redirect query is not present then user goes to the url provided in NEXT_PUBLIC_CLERK_SIGN_IN_REDIRECT_URL
                </h3>
            </div>
        </div>
    );
}