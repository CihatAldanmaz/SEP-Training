import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import { useEffect } from 'react';

import { handleGetTodo, handleCompleteTodo, handleDeleteTodo, handleFormChange, handleFormSubmitBind } from './action/todo';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const Component = ({ dispatch, todos, input, handleInitialData, handleFormChange, handleSubmit, handleComplete, handleDelete }) => {
  useEffect(() => {
    handleInitialData();
  }, [])

  return (
    <div>
      <div className="todo-header">
        <input type="text" placeholder="Add To Do" onChange={(e) => { handleFormChange(e.target.value) }} value={input} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="todo-items">
        {
          todos && todos.map((todo, i) => (
            todo && (<div className="todo-item">
              <input type="checkbox" onClick={() => handleComplete(todo.id)} />
              {
                todo.completed ? (<strike>{todo.title}</strike>) : (<span>{todo.title}</span>)
              }
              <button onClick={() => handleDelete(todo.id)}>x</button>
            </div>)
          ))
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    input: state.form.input
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInitialData: () => dispatch(handleGetTodo()),
    handleFormChange: (value) => dispatch(handleFormChange(value)),
    handleSubmit: () => dispatch(handleFormSubmitBind()),
    handleComplete: (i) => dispatch(handleCompleteTodo(i)),
    handleDelete: (i) => dispatch(handleDeleteTodo(i))
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Component);
export default App;
