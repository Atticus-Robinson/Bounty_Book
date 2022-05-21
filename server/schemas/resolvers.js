const { AuthenticationError } = require('apollo-server-express');
const { user, Bountiess } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await user.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('Bountiess')
          .populate('Bountiess');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    Users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('Bountiess')
        .populate('friends');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('friends')
        .populate('Bountiess');
    },
    Bounties: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Bounties.find(params).sort({ createdAt: -1 });
    },
    Bounties: async (parent, { _id }) => {
      return Bounties.findOne({ _id });
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await user.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await user.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addBounties: async (parent, args, context) => {
      if (context.Bounties) {
        const Bounties = await Bounties.create({ ...args, username: context.Bounties.username });

        await user.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { Bountiess: Bounties._id } },
          { new: true }
        );

        return Bounties;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addReaction: async (parent, { BountiesId, reactionBody }, context) => {
      if (context.user) {
        const updatedBounties = await Bounties.findOneAndUpdate(
          { _id: BountiesId },
          { $push: { reactions: { reactionBody, username: context.user.username } } },
          { new: true, runValidators: true }
        );

        return updatedThought;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updateduser = await user.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate('friends');

        return updateduser;
      }

      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;
