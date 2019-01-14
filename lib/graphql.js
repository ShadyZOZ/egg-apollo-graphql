'use strict';

const { ApolloServer } = require('apollo-server-koa');

module.exports = app => {
  const server = new ApolloServer(
    Object.assign({
      typeDefs: app.schema,
      resolvers: Object.assign({}, app.resolver),
      directives: app.directive,
      schemaDirectives: app.schemaDirective,
    }, app.config.apolloGraphql)
  );
  server.applyMiddleware({ app });
};
