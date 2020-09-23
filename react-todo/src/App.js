import React from 'react';
import logo from './logo.svg';
import './App.css';

import Todos from './Todos';

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ text: 'laundry', completed: false }, { text: 'shopping', completed: false }, { text: 'reading', completed: false }],
      inputValue: ''
    }
    this.handleCompleteTodo = this.handleCompleteTodo.bind(this);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
  }

  handleAddTodo() {
    const nextTodos = [...this.state.todos];
    nextTodos.push({ text: this.state.inputValue, completed: false });
    this.setState({
      todos: nextTodos,
      inputValue: ''
    })
  }
  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      inputValue: e.target.value
    })
  }
  handleCompleteTodo(i) {
    console.log(this);
    const nextTodos = [...this.state.todos];
    nextTodos[i].completed = !nextTodos[i].completed;
    this.setState({
      todos: nextTodos
    })
  }
  handleDeleteTodo(i) {
    console.log(this);
    const nextTodos = [...this.state.todos];
    nextTodos.splice(i, 1);
    this.setState({
      todos: nextTodos
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a> */}
          <div className="todo-input">
            <input type="text" onChange={(e) => this.handleChange(e)} value={this.state.inputValue} />
            <button onClick={() => this.handleAddTodo()}>Submit</button>
          </div>
          <Todos todos={this.state.todos} handleCompleteTodo={this.handleCompleteTodo} handleDeleteTodo={this.handleDeleteTodo} />
        </header>
      </div>
    )
  }
}
export default App;
