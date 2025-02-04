"use server"

import { auth, clerkClient } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"

export async function setRole(formData: FormData) {
    const authObj = await auth()
    if (authObj.sessionClaims?.metadata.role !== "admin") {
        throw new Error("Only admin can make this change")
    }

    const id = formData.get("id") as string
    const role = formData.get("role") as string

    const client = await clerkClient()

    try {
        await client.users.updateUser(id, {
            publicMetadata: {
                role
            }
        })
        revalidatePath("/admin")
    } catch (error) {
        console.log("error, error")
    }
}

export async function removeRole(formData: FormData) {
    const authObj = await auth()
    if (authObj.sessionClaims?.metadata.role !== "admin") {
        throw new Error("Only admin can make this change")
    }

    const id = formData.get("id") as string

    const client = await clerkClient()

    try {
        await client.users.updateUser(id, {
            publicMetadata: {
                role: ""
            }
        })
        revalidatePath("/admin")
    } catch (error) {
        console.log("error, error")
    }
}