import { connectToDB } from '@utils/database';
import Task from '@models/task';
import User from '@models/user';

//api end point to set the task as completed by the user
export const POST = async (request, { params }) => {
    const body = await request.json();
    console.log(body)
    const taskData = body.task
    const userData = body.session.user
    const fileData = body.fileData
    const description = body.description
    try {
        await connectToDB();
        console.log(body)

        const task = await Task.findOne({
            _id: taskData._id,
        });

        if (!task) {
            return new Response('Task not found', { status: 404 });
        }


        const user = await User.findOne({
            _id: userData.id,
        })

        console.log(userData.id, user)
        if (!user) {
            return new Response('User not found', { status: 404 });
        }

        // remove task from users pending tasks
        await User.updateOne(
            {
                _id: userData.id,
            },
            {
                $pull: {
                    'tasks.pending': taskData._id,
                },
            });

        // add task to users completed tasks
        await User.updateOne(
            {
                _id: userData.id,
            },
            {
                $push: {
                    'tasks.completed': taskData._id,
                    'tasks.attachments': {
                        attachment: fileData,
                        description: description ,
                        id: taskData._id
                    }
                }
            })

        // remove user from tasks pending
        await Task.updateOne(
            {
                _id: taskData._id,
            },
            {
                $pull: {
                    pending: userData.id
                }
            })

        // add user to tasks completed
           await Task.updateOne(
            {
                _id: taskData._id,
            },
            {
                $push: {
                    completed: userData.id,
                    attachments: {
                        attachment: fileData,
                        description: description,
                        id: userData.id
                    }
                }
            })

        return new Response("Successfully completed the task", { status: 200 });
    } catch (error) {
        return new Response('Failed to complete task', { status: 500 });
    }
}

//api end point to set the task as uncompleted for a user
export const PATCH = async (request, { params }) => {
    try {
        await connectToDB();

        const task = await Task.findOne({
            _id: params.id,
        });

        if (!task) {
            return new Response('Task not found', { status: 404 });
        }

        const user = await User.findOne({
            _id: request.user._id,
        })

        // remove task from users completed tasks
        await User.updateOne(
            {
                _id: user._id,
            },
            {
                $pull: {
                    'tasks.completed': task._id,
                },
            });

        // add task to users pending tasks
        await User.updateOne(
            {
                _id: user._id,
            },
            {
                $push: {
                    'tasks.pending': task._id,
                }
            })

        // remove user from tasks completed
        await Task.updateOne(
            {
                _id: task._id,
            },
            {
                $pull: {
                    completed: user._id,
                }
            })

        // add user to tasks pending
           await Task.updateOne(
            {
                _id: task._id,
            },
            {
                $push: {
                    pending: user._id,
                }
            })

        return new Response("Successfully uncompleted the task", { status: 200 });
    } catch (error) {
        return new Response('Failed to uncomplete task', { status: 500 });
    }
}
