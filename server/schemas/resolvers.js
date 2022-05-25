const { AuthenticationError } = require("apollo-server-express");
const { User, Bounty } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("bounty");
        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    // Retrieves all users in the database
    users: async (parent, args) => {
      const users = await User.find({});
      return users;
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("bounty");
    },
    bounties: async (parent, args) => {
      const bounties = await Bounty.find({});
      return bounties;
    },
    bounty: async (parent, { _id }) => {
      return Bounty.findById(_id);
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args) => {
      const user = await User.findOne(args)
    },
    // Login to an existing account - Only require email and password
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No User Found");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect Password");
      }
      // Sign token using the user data and return it
      const token = signToken(user);
      return { token, user };
    },

    addBounty: async (parent, args, context) => {
      if (context.user) {
      const bounty = await Bounty.create({ ...args, username: context.user.username });
      
      await User.findByIdAndUpdate(
        { _id: context.user._id },
        { $push: { bounty: bounty._id } },
        { new: true }
      );
      return bounty;
      }
    },
    updateBounty: async (parent, {name, description, reward, location}) => {
      const updatedBounty = await Bounty.findOneAndUpdate(

      )
    }
  },
};

module.exports = resolvers;
