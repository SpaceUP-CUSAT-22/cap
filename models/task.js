import { Schema, model, models } from "mongoose";
import user from "@models/user";

const TaskSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Creator is required.']
    },
    name: {
        type: String,
        required: [true, 'Name is required.']
    },
    description: {
        type: String,
        required: [true, 'Description is required.']
    },
    attachment: {
        type: String,
    },
    expirationDate: {
        type: Date,
    },
    completed: {
        type: [Schema.Types.ObjectId],
        ref: 'User',
        default: []
    },
    pending: {
        type: [Schema.Types.ObjectId],
        ref: 'User',
        default: []
    }
})

const Task = models.Task || model('Task', TaskSchema)
export default Task