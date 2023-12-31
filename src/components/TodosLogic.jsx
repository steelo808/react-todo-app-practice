import React from 'react';
import InputTodo from '../components/InputTodo';
import TodosList from '../components/TodosList';

function TodosLogic() {
    const todos = [
        {
            id:1,
            title: 'Setup development enviornment',
            completed: true
        },
        {
            id:2,
            title: 'Develop website and add content',
            completed: false,
        },
        {
            id:3,
            title: 'Setup development enviornment',
            completed: false,
        },
    ];

  return (
    <div>
    <InputTodo />
    <TodosList todosProps = {todos} />
    </div>
  );
}

export default TodosLogic;
