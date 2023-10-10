import User from "@models/user";
import { connectToDB } from "@utils/database";


export const GET = async (request, { params  }) => {
    try {
        await connectToDB()

        const topTenUsers = await User.find().sort({ points: -1 }).limit(10);

        return new Response(JSON.stringify(topTenUsers), {status: 200})
    } catch (error) {
        return new Response("Failed to fetch user", {status: 500})
    }
}