let React = require('react');

class Pager extends React.Component {
  render() {
    let props = this.props;
    let prefixCls = 'rc-pagination-item';
    let cls = `${prefixCls} ${prefixCls}-${props.page}`;

    if (props.active) {
      cls = `${cls} active`;
    }
    return (
      <li className={cls} onClick={props.onClick}>
        <a>{props.page}</a>
      </li>
    );
  }
}

Pager.propTypes = {
  page: React.PropTypes.number,
  active: React.PropTypes.bool
};

module.exports = Pager;