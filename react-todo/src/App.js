import React, {Component} from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import NavBar from './components/NavBar';
import DashBoard from './components/DashBoard';
import WithTodos from './components/withTodos/withTodos';
import { deleteTodo, addTodo } from './apis/TodoApi';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDashBoardclicked: true,
      idTodoClicked: false
    };
  }

  handleDashBoardClick = () => {
    this.setState({
      isDashBoardclicked: true,
      isTodoclicked: false
    })
  }

  handleTodoClick = () => {
    this.setState({
      isDashBoardclicked: false,
      isTodoclicked: true
    })
  }

  render() {
    const {isDashBoardclicked, isTodoclicked} = this.state;
      return (
      <div className="App">
        <NavBar handleDashBoardClick={this.handleDashBoardClick} handleTodoClick={this.handleTodoClick}/>
        
        <main>
          {
            isDashBoardclicked &&
            <WithTodos 
              renderHeader={(title) => <h1>{title}</h1>}
              render={(addTodo, deleteTodo, todoList) => (
                <DashBoard todoList={todoList}/>
              )} 
            />
          }

          {
            isTodoclicked && 
            <>
              <header>
                <h1>Todo App</h1>
              </header>
              {/* <WithTodos render={(addTodo, deleteTodo, todoList) => (
                <TodoForm addTodo={addTodo} />
              )}/> */}
              <WithTodos render={(addTodo, deleteTodo, todoList) => (
                <TodoList addTodo={addTodo} deleteTodo={deleteTodo} todoList={todoList}/>
              )}/>
              
            </>
          }
          
        </main>
        
      </div>
    );
  }
  
}

export default App;
 