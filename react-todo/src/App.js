import React, {Component} from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      todoList: [],
      errMsg: ""
    };
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value= event.target.value;
    this.setState({ [name] : value });
  }

  handleSubmit = (event) => {
    const {todo, todoList} = this.state;
    if(todo === "") {
      event.preventDefault();
      this.setState({errMsg: "Todo Cannot be blank"});
      return;
    }
    event.preventDefault();
    let todoId;
    if(todoList.length > 0) {
      todoId = (todoList[todoList.length - 1].id) + 1; 
    } else {
      todoId = 1;
    }
    const todoItem = {
      id: todoId,
      body: todo
    }
    let newList = todoList;
    newList.push(todoItem);
    this.setState({ 
      todoList: newList,
      todo: "",
      errMsg: ""
    });
  }

  deleteTodo = (id) => {
    const {todoList} = this.state;
    const newTodoList = todoList.filter(
      (todo) => +todo.id !== +id
    )
    this.setState({
      todoList: newTodoList
    })
  };

  render() {
    const {todoList, errMsg} = this.state;
      return (
      <div className="App">
        <header>
          <h1>Todo App</h1>
        </header>
        <main>
          <TodoForm 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit} 
            todo={this.state.todo}
          />
          <p>{errMsg}</p>
          <TodoList todoList={todoList} deleteTodo={this.deleteTodo}/>
        </main>
        
      </div>
    );
  }
  
}

export default App;
