'use strict';

const { connectorSymbol } = require('../../lib/symbol');

const CONNECTOR = Symbol('Context#connector');

module.exports = {
  get connector() {
    if (!this[CONNECTOR]) {
      const connectors = {};
      Object.keys(this.app[connectorSymbol]).forEach(name => {
        const Klass = this.app[connectorSymbol][name].connector;
        connectors[name] = new Klass(this);
      });
      this[CONNECTOR] = connectors;
    }
    return this[CONNECTOR];
  },

  get graphql() {
    return this.service.graphql;
  },
};
