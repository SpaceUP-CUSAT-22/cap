import User from "@models/user";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const {email} = await request.json();

    try {
        await connectToDB();
        const existingUser = await User.findOne({ email: email });
        if (!existingUser) {
            return new Response("User not found", { status: 404 });
        }
        existingUser.type = "admin";
        await existingUser.save();
        return new Response(JSON.stringify(existingUser), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response("Failed to create user", { status: 500 });
    }
}