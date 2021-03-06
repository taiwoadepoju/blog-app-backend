const graphql = require('graphql');

const { GraphQLString } = graphql;
const VerificationTokenType = require('../schema/verificationToken');
const verificationTokenResolver = require('../resolvers/verificationToken');

const VerificationMutation = {
  confirmToken: {
    type: VerificationTokenType,
    args: {
      token: { type: GraphQLString },
    },
    resolve(parentValue, args) {
      return verificationTokenResolver.confirmToken(args);
    },
  },

  updateToken: {
    type: VerificationTokenType,
    args: {
      token: { type: GraphQLString },
    },
    resolve(parentValue, args) {
      return verificationTokenResolver.updateToken(args);
    },
  },

};

module.exports = VerificationMutation;
