/* eslint func-names: 0, no-console: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'rc-select';
import Pagination from 'rc-pagination-enhance';
import 'rc-pagination-enhance/assets/index.less';
import 'rc-select/assets/index.css';

function onShowSizeChange(current, pageSize) {
  console.log(current);
  console.log(pageSize);
}

function onChange(current, pageSize) {
  console.log('onChange:current=', current);
  console.log('onChange:pageSize=', pageSize);
}

ReactDOM.render(
  <Pagination
    selectComponentClass={Select}
    showQuickJumper
    showSizeChanger
    defaultPageSize={20}
    defaultCurrent={5}
    onShowSizeChange={onShowSizeChange}
    onChange={onChange}
    total={450}
  />
, document.getElementById('__react-content'));
