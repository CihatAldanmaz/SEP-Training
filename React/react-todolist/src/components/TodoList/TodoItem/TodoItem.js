import React from 'react';

function TodoItem(props){
  const {todo} = props;ç
  
  return (
    <li className="todolist__content-item">
      <span>
        {todo.title}
      </span>
      <button id={todo.id} className="btn-remove" >
        X
      </button>
    </li>
  ) 
}

export default TodoItem;