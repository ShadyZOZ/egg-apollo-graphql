'use strict';

const merge = require('lodash.merge');
const { gql } = require('apollo-server-koa');
const { makeExecutableSchema } = require('graphql-tools');
const { schemaSymbol, resolverSymbol, directiveSymbol, schemaDirectiveSymbol } = require('../../lib/symbol');

const SCHEMA = Symbol('Application#schema');
const SCHEMA_STRING = Symbol('Application#schemaString');
const RESOLVER = Symbol('Application#resolver');
const DIRECTIVE = Symbol('Application#directive');
const SCHEMA_DIRECTIVE = Symbol('Application#schemaDirective');
const EXECUTABLE_SCHEMA = Symbol('Application#executableSchema');

function extractSchema(schemaObj) {
  const schemas = [];
  Object.keys(schemaObj).forEach(key => {
    if (typeof schemaObj[key] === 'string') {
      schemas.push(schemaObj[key]);
    } else {
      schemas.push(extractSchema(schemaObj[key]));
    }
  });
  return schemas.join('\n');
}

module.exports = {
  get schemaString() {
    if (!this[SCHEMA_STRING]) {
      this[SCHEMA_STRING] = extractSchema(this[schemaSymbol]);
    }
    return this[SCHEMA_STRING];
  },
  get schema() {
    if (!this[SCHEMA]) {
      this[SCHEMA] = gql`${this.schemaString}`;
    }
    return this[SCHEMA];
  },
  get resolver() {
    if (!this[RESOLVER]) {
      const resolvers = {};
      Object.keys(this[resolverSymbol]).forEach(name => {
        merge(resolvers, this[resolverSymbol][name].resolver);
      });
      this[RESOLVER] = resolvers;
    }
    return this[RESOLVER];
  },
  get directive() {
    if (!this[DIRECTIVE]) {
      const directives = {};
      Object.keys(this[directiveSymbol]).forEach(name => {
        merge(directives, (this[directiveSymbol][name].directive || this[directiveSymbol][name]));
      });
      this[DIRECTIVE] = directives;
    }
    return this[DIRECTIVE];
  },
  get schemaDirective() {
    if (!this[SCHEMA_DIRECTIVE]) {
      const schemaDirectives = {};
      Object.keys(this[schemaDirectiveSymbol]).forEach(name => {
        merge(schemaDirectives, (this[schemaDirectiveSymbol][name].schemaDirective || this[schemaDirectiveSymbol][name]));
      });
      this[SCHEMA_DIRECTIVE] = schemaDirectives;
    }
    return this[SCHEMA_DIRECTIVE];
  },
  get executableSchema() {
    if (!this[EXECUTABLE_SCHEMA]) {
      this[EXECUTABLE_SCHEMA] = makeExecutableSchema({
        typeDefs: this.schemaString,
        resolvers: this.resolver,
        directiveResolvers: this.directive,
        schemaDirectives: this.schemaDirective,
      });
    }
    return this[EXECUTABLE_SCHEMA];
  },
};
