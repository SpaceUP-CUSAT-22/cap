    import User from "@models/user";
import { connectToDB } from "@utils/database";


export const GET = async (request, { params  }) => {
    try {
        await connectToDB()

        //find users of type "admin"
        const users = await User.find({
            type: "admin"
        })

        return new Response(JSON.stringify(users), {status: 200})
    } catch (error) {
        return new Response("Failed to fetch all admin", {status: 500})
    }
}