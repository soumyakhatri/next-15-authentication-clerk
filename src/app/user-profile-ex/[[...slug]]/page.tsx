import { UserProfile } from "@clerk/nextjs";

export default function UserProfilePage2() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <UserProfile/>
        </div>
    );
}