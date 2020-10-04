import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

const url = 'https://jsonplaceholder.typicode.com/todos/';  
class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todoList: null,
    };
  }
   componentDidMount(){
    // const res = await fetch(url);
    // const data = await res.json();
    // this.setState({todoList: data})
    fetch(url)
    .then( res => res.json())
    .then( data => this.setState({ todoList: data }))
  }
  render(){
    // console.log("first console ",this.state)
    // const {todoList} = this.state.todoList;
    return(
      <div className='todolist_content'>
        <div className="content_heading">Your Plans</div>
         <hr />

        <input type="text" id="addInput" placeholder="What are you going to do?"></input> 
        <button id="addBtn">+</button>

      { !this.state.todoList ? 
          <div>Loading</div> : 
          this.state.todoList.map((todo, index) => {
            // console.log(todo, index)
            <TodoItem />
          })
        }
        
      </div>
    );
  };
};

export default TodoList;

