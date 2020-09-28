import React from 'react';

function TodoItem({onClick, todo}){
    return(
        <li>{todo.title}</li>
    )
}

export default TodoItem