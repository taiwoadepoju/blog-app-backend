const graphql = require('graphql');

const { GraphQLString } = graphql;
const UserType = require('../schema/user');
const authResolver = require('../resolvers/auth');
const authentication = require('../middleware/authentication');

const loginMutation = {
  loginUser: {
    type: UserType,
    args: {
      email: { type: GraphQLString },
      password: { type: GraphQLString },
    },
    resolve(parentValue, args, context) {
      return authResolver.login(args, context);
    },
  },
  changePassword: {
    type: UserType,
    args: {
      currentPassword: { type: GraphQLString },
      newPassword: { type: GraphQLString },
    },
    resolve(parentValue, args, context) {
      authentication(context);
      return authResolver.changePassword(args, context);
    },
  },
  initiateForgotPassword: {
    type: UserType,
    args: {
      email: { type: GraphQLString },
    },
    resolve(parentValue, args, context) {
      return authResolver.initiateForgotPassword(args, context);
    },
  },
  completeForgotPassword: {
    type: UserType,
    args: {
      currentPassword: { type: GraphQLString },
      newPassword: { type: GraphQLString },
    },
    resolve(parentValue, args, context) {
      return authResolver.completeForgotPassword(args, context);
    },
  },

};

module.exports = loginMutation;
