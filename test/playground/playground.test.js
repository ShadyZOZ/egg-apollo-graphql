'use strict';

const assert = require('assert');
const mm = require('egg-mock');

describe('test/playground/playground.test.js', () => {
  let app;

  before(() => {
    app = mm.app({
      baseDir: 'apps/apollo-graphql-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should get playground html response', async () => {
    app.mockHttpclient('/graphql', 'GET', {});
    const result = await app.httpRequest()
      .get('/graphql')
      .set('Accept', 'text/html')
      .expect(200);

    assert(result.type, 'text/html');
  });
});
