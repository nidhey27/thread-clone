import { fetchUser } from "@/lib/actions/user.actions"
import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import Image from "next/image"
import PostThread from "@/components/forms/PostThread"

async function Page() {
    const user = await currentUser()

    if (!user) return null

    const userInfo: any = await fetchUser(user.id)

    if (!userInfo?.onboarded) redirect("/onboarding")

    return (
        <>
            <h1 className="head-text">Create Thread</h1>

            <PostThread userId={(userInfo._id).toString()} />
        </>
    )
}
export default Page