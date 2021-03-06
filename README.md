# rc-pagination-enhance-enhance
---

forked from [react-component/pagination](https://github.com/react-component/pagination)@1.12.11

## New feature

- pageBufferSize：set page items, it's like `showLessItems`, but more freedom
- showJumpNext：show next jumper, defaultValue is `true`, Meet the ban on direct jump to the last page needs

React Pagination Component.

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/rc-pagination-enhance.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-pagination-enhance
[travis-image]: https://img.shields.io/travis/react-component/pagination.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/pagination
[coveralls-image]: https://img.shields.io/coveralls/react-component/pagination.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/pagination?branch=master
[gemnasium-image]: http://img.shields.io/gemnasium/react-component/pagination.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/react-component/pagination
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/rc-pagination-enhance.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-pagination-enhance

## Development

```
npm install
npm start
```

## Example

http://localhost:3000/examples/

online example: http://react-component.github.io/pagination/examples/

## Feature

* support ie8,ie8+,chrome,firefox,safari

## Install

[![rc-pagination-enhance](https://nodei.co/npm/rc-pagination-enhance.png)](https://npmjs.org/package/rc-pagination-enhance)

## Usage

```js
var Pagination = require('rc-pagination-enhance');
var React = require('react');
React.render(<Pagination />, container);
```

## API

| Parameter        | Description                        | Type                           | Default                                  |
| ---------------- | ---------------------------------- | ------------------------------ | ---------------------------------------- |
| defaultCurrent   | uncontrolled current page          | Number                         | 1                                        |
| current          | current page                       | Number                         | undefined                                |
| total            | items total count                  | Number                         | 0                                        |
| defaultPageSize  | default items per page             | Number                         | 10                                       |
| pageSize         | items per page                     | Number                         | 10                                       |
| onChange         | page change callback               | Function(current, pageSize)    | -                                        |
| showSizeChanger  | show pageSize changer              | Bool                           | false                                    |
| pageSizeOptions  | specify the sizeChanger selections | Array<String>                  | ['10', '20', '30', '40']                 |
| onShowSizeChange | pageSize change callback           | Function(current, size)        | -                                        |
| showQuickJumper  | show quick goto jumper             | Bool / Object                  | false / {goButton: true}                 |
| showJumpNext     | show next jumper                   | Bool                           | true                                     |
| showTotal        | show total records and range       | Function(total, [from, to])    | -                                        |
| className        | className of pagination            | String                         | -                                        |
| simple           | when set, show simple pager        | Object                         | null                                     |
| locale           | to set l10n config                 | Object                         | [zh_CN](https://github.com/react-component/pagination/blob/master/src/locale/zh_CN.js) |
| style            | the style of pagination            | Object                         | {}                                       |
| showLessItems    | show less page items               | Bool                           | false                                    |
| pageBufferSize   | set page items                     | Number                         | -                                        |
| showTitle        | show page items title              | Bool                           | true                                     |
| itemRender       | custom page item renderer          | Function(current, type: 'page' | 'prev'                                   |

## License

rc-pagination-enhance is released under the MIT license.
