const { Schema, model } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const bountySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  reward: {
    type: Number,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true.valueOf,
    trim: true,
  },
});

const Bounty = model("Bounty", bountySchema);

module.exports = Bounty;
