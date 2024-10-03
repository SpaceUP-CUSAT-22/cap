import User from "@models/user";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    try {
        await connectToDB();

        const { referralCode } = await request.json();

        if (!referralCode) {
            return new Response(JSON.stringify({ isValid: false, message: "Please enter a referral code." }), { status: 400 });
        }

        const users = await User.find({});

        const referralNumbers = users.map(user => {
            return user.username.slice(0, 3) + user.id.slice(user.id.length - 5, user.id.length);
        });

        const isValid = referralNumbers.includes(referralCode);

        if (isValid) {
            return new Response(JSON.stringify({ isValid: true, message: "Valid referral code! ₹50 discount applied." }), { status: 200 });
        } else {
            return new Response(JSON.stringify({ isValid: false, message: "Invalid referral code." }), { status: 200 });
        }
    } catch (error) {
        console.error("Failed to verify referral code:", error);
        return new Response(JSON.stringify({ isValid: false, message: "Error verifying code. Please try again." }), { status: 500 });
    }
};