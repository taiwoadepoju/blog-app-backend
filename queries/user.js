const graphql = require('graphql');
const { GraphQLList } = graphql;
const userResolvers = require('../resolvers/user');
const UserType = require('../schema/user');

const userQuery = {
  getAllUsers: {
    type: new GraphQLList(UserType),
    resolve() {
      return userResolvers.getAllUsers();
    }
  },

}


module.exports = userQuery;