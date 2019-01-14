'use strict';

/**
 * egg-apollo-graphql default config
 * @member Config#apolloGraphql
 * @property {String} SOME_KEY - some description
 */
exports.apolloGraphql = {
  introspection: false,
  playground: false,
  tracing: false,
  context({ ctx }) {
    return ctx;
  },
};
