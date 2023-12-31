import React from 'react';

function TodoItem({ itemProp }) {
  return (
    <li>
      {itemProp.title}
    </li>
  );
}

export default TodoItem;
