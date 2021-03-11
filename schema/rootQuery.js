const graphql = require('graphql');

const { GraphQLObjectType } = graphql;
const userQuery = require('../queries/user');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    users: { ...userQuery.getAllUsers },
  }),
});

module.exports = RootQuery;
