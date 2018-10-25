import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoForm extends Component {
  static propTypes = {
    onAddItem: PropTypes.func,
  };

  state = { value: '' };

  handleChange = event => {
    this.setState({ value: event.target.value });
  }

  addItem = () => {
    const { value } = this.state;
    const { onAddItem } = this.props;

    if (value && value !== '') {
      onAddItem({ newItemValue: value });
      this.setState({ value: '' });
    }
  }

  render() {
    return (
      <div className="pure-form pure-form-aligned">
        <input
          type="text"
          value={this.state.value}
          data-testid="newItemField"
          className="form-control"
          placeholder="add new item..."
          onChange={this.handleChange}
        />
        <button
          className="pure-button pure-button-primary"
          data-testid="addBtn"
          onClick={this.addItem}
        >
          Add
        </button>
      </div>
    )
  }
}

export default TodoForm;
