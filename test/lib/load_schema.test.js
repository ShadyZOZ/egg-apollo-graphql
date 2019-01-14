'use strict';

const assert = require('assert');
const mock = require('egg-mock');

describe('test/lib/load_schema.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/apollo-graphql-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should load schema to app.schema', () => {
    assert(app.hasOwnProperty('schema'));
    assert(typeof app.schema === 'object');
    assert(app.hasOwnProperty('schemaString'));
    assert(typeof app.schemaString === 'string');
  });

  it('should load resolver to app.resolver', () => {
    assert(app.hasOwnProperty('resolver'));
    assert(app.resolver.Query.hasOwnProperty('test'));
    assert(typeof app.resolver.Query.test === 'function');
  });

  it('should load connector to ctx.connector', () => {
    const ctx = app.mockContext();
    assert(ctx.connector);
    assert(ctx.connector.test);
    assert(ctx.connector.test.hello);
    assert(ctx.connector.test.hello() === 'Hello, World!');
    assert(ctx.connector.test.hello('Egg') === 'Hello, Egg!');
  });
});
