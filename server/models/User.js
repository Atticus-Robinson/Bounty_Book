const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    username: {
      type: String,
      required: true,
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
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    bounty: [
      {
        type: Schema.Types.ObjectId,
        ref: "Bounty",
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
