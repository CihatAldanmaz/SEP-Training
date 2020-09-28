import React from "react";
import Header from "./Header";
import InputFrom from "./InputForm";
import TodoList from "./TodoList";
// import {fetchTodos} from '../redux/index'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listOfTodos: [],
    };
  }

  fetchTodos(){
    axios.get(`https://jsonplaceholder.typicode.com/todos`)
    .then(res => {
  
      this.setState({
        listOfTodos: res.data
      })
    })
  }
  componentDidMount() {
    this.fetchTodos()
  }
  render() {
    return (
      <div className="App">
        <Header />
        <InputFrom />
        <TodoList todos={this.state.listOfTodos}/>
      </div>
    );
  }
}

export default App;
