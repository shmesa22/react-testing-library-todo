import React, { Component } from 'react';
import TodoForm from 'components/TodoForm';
import TodoList from 'components/TodoList';

class TodoApp extends Component {
  static defaultProps = {
    items: [],
  }

  state = {
    todoItems: this.props.items,
  }

  addItem = (todoItem) => {
    const { todoItems } = this.state;

    todoItems.push({
      index: todoItems.length + 1,
      value: todoItem.newItemValue,
      done: false,
    });

    this.setState({ todoItems });
  }

  removeItem = (itemIndex) => {
    const { todoItems } = this.state;

    todoItems.splice(itemIndex, 1);
    this.setState({ todoItems });
  }

  markTodoDone = (itemIndex) => {
    const { todoItems } = this.state;
    const todo = todoItems[itemIndex];

    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({ todoItems });
  }

  render() {
    return (
      <div id="main">
        <h1>My Todo List</h1>
        <TodoList
          items={this.state.todoItems}
          removeItem={this.removeItem}
          markTodoDone={this.markTodoDone}
        />
        <TodoForm onAddItem={this.addItem} />
      </div>
    );
  }
}

export default TodoApp;
