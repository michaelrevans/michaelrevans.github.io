import React from 'react';
import PropTypes from 'prop-types';

require('../scss/list.scss');

class ListItem extends React.Component {
  render() {
    return (
      <li className="shopping-list-item">
        {this.props.content}
        <span onClick={() => this.props.handleClick(this.props.index)}>&times;</span>
      </li>
    )
  }
}

ListItem.propTypes = {
  content: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
}

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul className="shopping-list">
          {this.props.listItems.map((item, index) => {
            return <ListItem
                    content={item}
                    handleClick={this.props.handleClick}
                    key={index}
                    index={index}/>;
          })}
        </ul>
      </div>
    )
  }
}


export default List;
