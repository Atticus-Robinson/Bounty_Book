const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const PostSchema = new Schema(
  {
    bountyName: {
      type: String,
      required: true,
      trim: true,
    },
    createdBy: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createAtVal) => dateFormat(createAtVal),
    },
  },
  {
    toJSON: {
      virutals: true,
      getters: true,
    },
    id: false,
  }
);

const Post = model("Post", PostSchema);

module.exports = Post;
