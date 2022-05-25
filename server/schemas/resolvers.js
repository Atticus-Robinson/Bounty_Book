const { AuthenticationError } = require("apollo-server-express");
const { User, Bountiess } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await user
          .findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("Bountiess")
          .populate("Bountiess");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    Users: async () => {
      return User.find()
        .select("-__v -password")
        .populate("Bountiess")
        .populate("friends");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("Bountiess");
    },
    Bounties: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Bounties.find(params).sort({ createdAt: -1 });
    },
    Bounty: async (parent, { _id }) => {
      return Bounties.findOne({ _id });
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

    logout: async ( parents, args, context ) => {

    },

    addBounty: async (parent, args, context) => {
      if (context.user) {
        const updatedBounties = await Bounties.create({ ...args },
          { new: true, runValidators: true }
        );
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { bounties: bounty._id } },
          { new: true }
        );
        return updatedBounties;
      }

      throw new AuthenticationError("You need to be logged in");
    },

    removeBounty: async (parent, { bountyId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { bounties: { bountyId } } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in");
    },
  },
};

module.exports = resolvers;
