const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const error = require('../middleware/error');

const schema = require('../schema');

module.exports = function (app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
  }));
  app.use(error);
};
