import User from "@models/user";
import { connectToDB } from "@utils/database";

export const config = {
    api: {
      responseLimit: false,
    },
  }


export const GET = async (request, { params  }) => {
    try {
        await connectToDB()

        //find users of type "user"
        const users = await User.find({
            type: "user"
        })

        return new Response(JSON.stringify(users), {status: 200})
    } catch (error) {
        return new Response("Failed to fetch all users", {status: 500})
    }
}

export const POST = async(request) => {
    const body = await request.json()
    try {
        await connectToDB()

        //find users of type "user"
        const user = await User.findOne({
            _id: body.id,
        })

        if(!user){
            return new Response("User not found", {status: 404})
        }
        user.phone = body.formData.phone;
        user.name = body.formData.name;
        user.yog = body.formData.yog;
        user.branch = body.formData.branch;
        user.uni = body.formData.uni;

        // Save the updated user
        await user.save();

        return new Response("User successfully registered", {status: 200})

    } catch (error) {
        console.log(error)
    }
}