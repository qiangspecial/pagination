// use jsx to render html, do not modify simple.html

import Pagination from 'rc-pagination-enhance';
import React from 'react';
import ReactDOM from 'react-dom';
import 'rc-pagination-enhance/assets/index.less';

ReactDOM.render(
  <Pagination simple defaultCurrent={1} total={50} />,
  document.getElementById('__react-content')
);
