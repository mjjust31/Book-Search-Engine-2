const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const newUser = await User.create({ username, email, password });
      const token = signToken(newUser);
      return { token, newUser };
    },
    login: async (parent, { username, password }) => {
      //need to confirm the login page
      const foundUser = await User.findOne({ username });

      if (!foundUser) {
        throw AuthenticationError;
      }
      const correctPw = await foundUser.isCorrectPassword(password);
      if (!correctPw) throw AuthenticationError;

      const token = signToken(foundUser);
      return { token, foundUser };
    },
  },
};

module.exports = resolvers;
