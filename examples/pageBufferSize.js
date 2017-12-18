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
        <Pagination onChange={this.onChange} pageBufferSize={2} current={this.state.current} total={1000} />
        <Pagination onChange={this.onChange} pageBufferSize={3} current={this.state.current} total={1000} />
        <Pagination onChange={this.onChange} pageBufferSize={4} current={this.state.current} total={1000} />
        <Pagination onChange={this.onChange} pageBufferSize={5} current={this.state.current} total={1000} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('__react-content'));
