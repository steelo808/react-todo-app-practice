import React from 'react';
import TodoItem from '../components/TodoItem';

function TodosList({ todosProps }) {
   // destructuring the prop object
  return (
    <ul>
      {todosProps.map((todo) =>(
        <TodoItem key={todo.id} itemProp={todo} />
      ))}
    </ul>
  );
}

export default TodosList;
