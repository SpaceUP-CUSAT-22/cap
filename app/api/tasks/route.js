//create new task

import Task from '@models/task';
import { connectToDB } from '@utils/database';
import User from '@models/user';

export const POST = async (request) => {

    const body = await request.json();
  try {
    await connectToDB();

    const creator = await User.findOne({
        _id: body.creator,
    });

    if (creator.type !== 'admin') {
        return new Response('Only admins can create tasks', { status: 401 });
    }

    const pending = await User.find({
        type: 'user',
    });

    body.pending = pending.map((user) => user._id);

    const task = await Task.create(body);

    // add task to users pending tasks
    await User.updateMany(
        {
            type: 'user',
        },
        {
            $push: {
                'tasks.pending': task._id,
            },
        });

    return new Response(JSON.stringify(task), { status: 200 });
  } catch (error) {
    return new Response('Failed to create task', { status: 500 });
  }
}

//update task
export const PUT = async (request, { params }) => {
    try {
        await connectToDB();

        const task = await Task.findOne({
            _id: params.id,
        });

        if (!task) {
            return new Response('Task not found', { status: 404 });
        }

        const body = await request.json();

        const updatedTask = await Task.findOneAndUpdate(
            {
                _id: params.id,
            },
            body,
            {
                new: true,
            });

        return new Response(JSON.stringify(updatedTask), { status: 200 });
    } catch (error) {
        return new Response('Failed to update task', { status: 500 });
    }
}

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        const task = await Task.findOne({
            _id: params.id,
        });

        if (!task) {
            return new Response('Task not found', { status: 404 });
        }

        await Task.deleteOne({
            _id: params.id,
        });

        return new Response('Task deleted', { status: 200 });
    } catch (error) {
        return new Response('Failed to delete task', { status: 500 });
    }
}