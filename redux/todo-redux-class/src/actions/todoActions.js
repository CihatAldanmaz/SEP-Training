import {FETCH_TODOS, NEW_TODO, DELETE_TODO} from './types';

export const fetchTodos = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(todos => 
        dispatch({
            type: FETCH_TODOS,
            payload: todos
        })
    );
};

export const createTodo = (todoData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify(todoData),
            headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
        }) 
        .then(res => res.json())
        .then(todo => dispatch({
            type: NEW_TODO,
            payload: todo
        }));
};

export const deleteTodo = (todoId) => dispatch => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
        method: 'DELETE',
      })
      .then((res) => res.json())
    //   .then(data => console.log('data: ' + data))
      .then(() => dispatch({
          type: DELETE_TODO,
          payload: todoId
      }))
};