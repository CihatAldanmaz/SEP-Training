import React, {Component} from 'react';
import {Todo} from './../model/Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            errMsg: ''
        }
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value= event.target.value;
        this.setState({ [name] : value });
    }

    handleSubmit = (event) => {
        const {todo} = this.state;
        if(todo === "") {
            event.preventDefault();
            this.setState({errMsg: "Todo Cannot be blank"});
            return;
        }
        event.preventDefault();
        const userId = 1;
        const title = todo;
        const completed = false;
        const newTodo = new Todo(userId, title, completed);
        const {addTodo} = this.props;
        addTodo(newTodo);
        this.setState({
            todo: '',
            errMsg: ''
        })

    }

    render() {
        const {todoList, deleteTodo} = this.props;
        const {todo, errMsg} = this.state;
        return (
            <div className="App">
                <form onSubmit={this.handleSubmit}> 
                    <input  
                        type="text"
                        value={todo}
                        name="todo"
                        onChange={this.handleChange}
                    />
                    <button>Add</button>
                </form>
               <p> {errMsg}</p>
                <ul>
                    {
                        todoList.map((item) => {
                            return (
                            <li>
                                {item.title} <button onClick={() => deleteTodo(item.id)}>Delete</button>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
    
  }
  
  export default TodoList;