import React from 'react';
import TodoItem from '../components/TodoItem';

function TodosList(props) {
  const { todosProps } = props; // destructuring the prop object
  return (
    <ul>
      {todosProps.map((todo) =>(
        <li>{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodosList;
