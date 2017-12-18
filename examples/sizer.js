/* eslint func-names: 0, no-console: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'rc-select';
import Pagination from 'rc-pagination-enhance';
import 'rc-pagination-enhance/assets/index.less';
import 'rc-select/assets/index.css';

class Hello extends React.Component {
  state = {
    pageSize: 20,
  };
  onShowSizeChange = (current, pageSize) => {
    console.log(current);
    this.setState({ pageSize });
  }
  render() {
    return (
      <div style={{ margin: 10 }}>
        <Pagination
          selectComponentClass={Select}
          showSizeChanger
          pageSize={this.state.pageSize}
          onShowSizeChange={this.onShowSizeChange}
          defaultCurrent={3}
          total={500}
        />
        <Pagination
          selectComponentClass={Select}
          showSizeChanger
          pageSize={this.state.pageSize}
          onShowSizeChange={this.onShowSizeChange}
          defaultCurrent={3}
          total={500}
        />
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById('__react-content'));
