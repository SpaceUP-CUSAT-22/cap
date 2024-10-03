import User from "@models/user";
import { connectToDB } from "@utils/database";

import { NextResponse } from 'next/server';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(request) {
    console.log("POST request received");
    try {
        console.log("Connecting to DB");
        await connectToDB();
        console.log("DB connected, parsing request body");

        const body = await request.json();
        const { referralCode } = body;

        console.log("Referral code received:", referralCode);

        if (!referralCode) {
            console.log("No referral code provided");
            return NextResponse.json(
                { isValid: false, message: "Please enter a referral code." },
                { status: 400, headers: corsHeaders }
            );
        }

        console.log("Fetching users");
        const users = await User.find({});
        console.log(`Found ${users.length} users`);

        const referralNumbers = users.map(user => {
            return user.username.slice(0, 3) + user.id.slice(user.id.length - 5, user.id.length);
        });

        console.log(`Generated ${referralNumbers.length} referral numbers`);
        const isValid = referralNumbers.includes(referralCode);
        console.log("Is referral code valid?", isValid);

        if (isValid) {
            return NextResponse.json(
                { isValid: true, message: "Valid referral code! ₹50 discount applied." },
                { status: 200, headers: corsHeaders }
            );
        } else {
            return NextResponse.json(
                { isValid: false, message: "Invalid referral code." },
                { status: 200, headers: corsHeaders }
            );
        }
    } catch (error) {
        console.error("Failed to verify referral code:", error);
        return NextResponse.json(
            { isValid: false, message: "Error verifying code. Please try again.", details: error.message },
            { status: 500, headers: corsHeaders }
        );
    }
}