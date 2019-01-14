'use strict';

class TestConnector {
  hello(name) {
    return `Hello, ${name || 'World'}!`;
  }
}

module.exports = TestConnector;
