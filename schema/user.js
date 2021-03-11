const graphql = require('graphql');

const {
  GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean,
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    emailConfirmed: { type: GraphQLBoolean },
    phone: { type: GraphQLString },
    enabled: { type: GraphQLBoolean },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    token: { type: GraphQLString },
  }),
});

module.exports = UserType;
