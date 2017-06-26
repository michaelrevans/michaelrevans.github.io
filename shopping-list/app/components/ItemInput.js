import React from 'react';
import PropTypes from 'prop-types';

require('../scss/item-input.scss');

class ItemInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }
  clearForm() {
    this.setState({
      value: ''
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={e => {
          this.clearForm();
          this.props.handleSubmit(e, this.state.value);
        }}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            hidden
          />
        </form>
      </div>
    )
  }
}

ItemInput.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

export default ItemInput;
