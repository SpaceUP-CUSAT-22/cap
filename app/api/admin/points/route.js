import Task from '@models/task';
import { connectToDB } from '@utils/database';
import User from '@models/user';

export const POST = async(request) => {
    const body = await request.json()
    try{
        await connectToDB();
        const user = await User.findOne({ _id: body.id });
        if (!user) {
            return new Response("User not found", { status: 404 });
        }
        user.points += body.points
        await user.save()
        return new Response("Successfully incremented points", { status: 200 });
    }catch(err){
        console.log(err)
        return new Response('Failed to increment points', { status: 500 });
    }
}