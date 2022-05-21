const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
      default: false,
    },
    picture: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
      trin: true,
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  {
    toJSON: {
      virutals: true,
      getters: true,
    },
    id: false,
  }
);

const User = model("User", UserSchema);

module.exports = User;
