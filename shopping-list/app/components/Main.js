import React from 'react';

import List from './List';
import ItemInput from './ItemInput';

require('../scss/main.scss');

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event, inputValue) {
    event.preventDefault();
    this.addItem(inputValue);
  }
  handleClick(index) {
    this.removeItem(index);
  }
  addItem(name) {
    this.setState({
      listItems: [...this.state.listItems, name]
    });
  }
  removeItem(item) {
    const newList = [
      ...this.state.listItems.slice(0, item),
      ...this.state.listItems.slice(item + 1)
    ]
    this.setState({
      listItems: newList
    });
  }
  render() {
    return (
      <div className="list-container">
        <List
          handleClick={this.handleClick}
          listItems={this.state.listItems}
        />
        <ItemInput
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default Main;
