/* eslint func-names: 0, no-console: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import Pagination from 'rc-pagination-enhance';
import 'rc-pagination-enhance/assets/index.less';

class App extends React.Component {
  state = {
    current: 3,
  };
  onChange = (page) => {
    console.log(page);
    this.setState({
      current: page,
    });
  }
  render() {
    return (
      <div>
        <Pagination
          onChange={this.onChange}
          current={this.state.current}
          total={80}
          showLessItems
        />
        <Pagination showLessItems defaultCurrent={1} total={60} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('__react-content'));
