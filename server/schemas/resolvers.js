const { AuthenticationError } = require("apollo-server-express");
const { User, Bounty } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await user
          .findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("bounty")
        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    Users: async () => {
      return User.find()
        .select("-__v -password")
        .populate("bounty")
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("bounty");
    },
    bounty: async (parent, { username }) => {
      const params = username ? { username } : {};
      return bounty.find(params).sort({ createdAt: -1 });
    },
    bounty: async (parent, { _id }) => {
      return bounty.findOne({ _id });
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await user.create(args);
      const token = signToken(user);

      return { token, user };
    },
    // Login to an existing account - Only require email and password
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      // Sign token using the user data and return it
      const token = signToken(user);
      return { token, user };
    },

    addPost: async (parent, { input }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { posts: input } },
          { new: true, runValidators: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in");
    },

    removePost: async (parent, { postId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { posts: { postId } } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in");
    },
  },
};

module.exports = resolvers;
