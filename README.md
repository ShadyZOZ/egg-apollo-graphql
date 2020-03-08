# egg-apollo-graphql

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-apollo-graphql.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-apollo-graphql
[travis-image]: https://img.shields.io/travis/shadyzoz/egg-apollo-graphql.svg?style=flat-square
[travis-url]: https://travis-ci.org/shadyzoz/egg-apollo-graphql
[codecov-image]: https://img.shields.io/codecov/c/github/shadyzoz/egg-apollo-graphql.svg?style=flat-square
[codecov-url]: https://codecov.io/github/shadyzoz/egg-apollo-graphql?branch=master
[david-image]: https://img.shields.io/david/shadyzoz/egg-apollo-graphql.svg?style=flat-square
[david-url]: https://david-dm.org/shadyzoz/egg-apollo-graphql
[snyk-image]: https://snyk.io/test/npm/egg-apollo-graphql/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-apollo-graphql
[download-image]: https://img.shields.io/npm/dm/egg-apollo-graphql.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-apollo-graphql

<!--
Description here.
-->

## Install

```bash
$ npm i egg-apollo-graphql --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.apolloGraphql = {
  enable: true,
  package: 'egg-apollo-graphql',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.apolloGraphql = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/shadyzoz/egg/issues).

## License

[MIT](LICENSE)
