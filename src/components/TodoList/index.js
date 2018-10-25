import React from 'react';
import TodoListItem from 'components/TodoListItem';

const TodoList = ({
  items,
  removeItem,
  markTodoDone
}) => (
  <table className="pure-table pure-table-horizontal">
    <tbody>
      {items.map((item, index) => (
        <TodoListItem
          key={index}
          {...{item, index, removeItem, markTodoDone}}
        />
      ))}
    </tbody>
  </table>
);

TodoList.defaultProps = {
  items: [],
}

export default TodoList;
