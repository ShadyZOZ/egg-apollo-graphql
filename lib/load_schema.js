'use strict';

const path = require('path');
const {
  schemaSymbol,
  resolverSymbol,
  connectorSymbol,
  directiveSymbol,
  schemaDirectiveSymbol,
} = require('./symbol');

module.exports = app => {

  const dir = path.join(app.baseDir, 'app/graphql');

  loadSchemaToApp(app, dir);
  loadResolverToApp(app, dir);
  loadDirectiveToApp(app, dir);
  loadSchemaDirectiveToApp(app, dir);
  loadConnectorToContext(app, dir);
};

// load schema and directives
function loadSchemaToApp(app, dir) {
  app.loader.loadToApp(dir, schemaSymbol, {
    match: '**/*.graphql',
    initializer(exports) {
      return exports.toString();
    },
  });
}

function loadResolverToApp(app, dir) {
  app.loader.loadToApp(dir, resolverSymbol, {
    match: [ '**/resolver.(js|ts)', '!**/*.d.ts' ],
  });
}

function loadDirectiveToApp(app, dir) {
  app.loader.loadToApp(dir, directiveSymbol, {
    match: [ '**/directive.(js|ts)', '!**/*.d.ts' ],
  });
}

function loadSchemaDirectiveToApp(app, dir) {
  app.loader.loadToApp(dir, schemaDirectiveSymbol, {
    match: [ '**/schemaDirective.(js|ts)', '!**/*.d.ts' ],
  });
}

function loadConnectorToContext(app, dir) {
  app.loader.loadToApp(dir, connectorSymbol, {
    match: [ '**/connector.(js|ts)', '!**/*.d.ts' ],
  });
}
