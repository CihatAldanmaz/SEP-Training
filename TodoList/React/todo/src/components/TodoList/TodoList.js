import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

const url = 'https://jsonplaceholder.typicode.com/todos/';  
class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todoList: null,
      inputValue: null
    };

    this.changeInput = this.changeInput.bind(this);
    this.addValue = this.addValue.bind(this);
    this.remove = this.remove.bind(this);
  };

    changeInput(e){
      this.setState({inputValue: e});
    };
    
    addValue(){
      const data = {id:'201', userId: '201', title: this.state.inputValue};
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      })
      .then(res=> res.json())
      .then(data=> console.log(data));
    }

    remove(id){
      console.log(url+id)
      fetch(url + id, {method: "DELETE"})
      .then(res => res.text())
      .then(data => console.log('data',data))
      this.forceUpdate();
    }
    componentDidMount(){
      fetch(url)
      .then( res => res.json())
      .then( data => this.setState({ todoList: data }))
    }
    render(){
      return(
      <div className='todolist_content'>
        <div className="content_heading">Your Plans</div>
         <hr />
        <li>
          <input onChange={e => this.changeInput(e.target.value)} type="text" id="addInput" placeholder="What are you going to do?"></input> 
          <button id="addBtn" onClick={this.addValue}>+</button>
        </li>
        <ul>
        { !this.state.todoList? 
            <div>Loading</div> : 
            this.state.todoList.map((todo, index) => {
            return <TodoItem key={index} id={todo.id} title={todo.title} remove={this.remove}/>
            })
          }
        </ul>
      </div>
    );
  };
};

export default TodoList;

