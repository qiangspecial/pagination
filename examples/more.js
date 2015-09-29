'use strict'

require('rc-pagination/assets/index.less')
var Pagination = require('rc-pagination')
var React = require('react')

React.render(
  <Pagination className="ant-pagination" onChange={onChange} total={450} />,
  document.getElementById('__react-content')
);

function onChange(key) {
  console.log(key)
}
