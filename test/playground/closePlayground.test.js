'use strict';

const mm = require('egg-mock');

describe('test/playground/closePlayground.test.js', () => {
  let app;

  before(() => {
    app = mm.app({
      baseDir: 'apps/apollo-graphql-test-2',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should get playground html response', async () => {
    await app.httpRequest()
      .get('/graphql')
      .set('Accept', 'text/html')
      .expect('GET query missing.');
  });
});
