const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const PostSchema = new Schema(
  {
    bountyName: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trin: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
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
