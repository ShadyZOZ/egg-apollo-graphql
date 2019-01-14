'use strict';

module.exports = {
  Query: {
    test(_, { name }, ctx) {
      return ctx.connector.test.hello(name);
    },
  },
};
