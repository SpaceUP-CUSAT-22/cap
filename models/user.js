import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  name: {
    type: String,
    required: [true, "Name is required!"],
    default: ""
  },
  phone: {
    type: String,
    default: ""
  },
  uni: {
    type: String,
    default: ""
  },
  branch: {
    type: String,
    default: ""
  },
  yog: {
    type: String,
    default: ""
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
  },
  image: {
    type: String,
  },
  type: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  //tasks which is completed and  pending
    tasks: {
      completed: [{
          type: Schema.Types.ObjectId,
          ref: 'Task',
          default: []
      }],
      pending: [{
          type: Schema.Types.ObjectId,
          ref: 'Task',
          default: []
      }],
      attachments: [
        {
          attachment: String,
          id: {
            type: Schema.Types.ObjectId,
            ref: 'Task'
          },
          default: [{}]
        },
      ]
    },
  points: {
    type: Number,
    default: 0,
    },
});

const User = models.User || model("User", UserSchema);

export default User;