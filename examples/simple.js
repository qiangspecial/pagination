// use jsx to render html, do not modify simple.html

import 'rc-pagination-enhance/assets/index.less';
import Pagination from 'rc-pagination-enhance';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Pagination defaultCurrent={2} total={300} />,
  document.getElementById('__react-content')
);
