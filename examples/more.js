import 'rc-pagination-enhance/assets/index.less';
import Pagination from 'rc-pagination-enhance';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Pagination className="ant-pagination" defaultCurrent={3} total={450} />,
  document.getElementById('__react-content')
);
