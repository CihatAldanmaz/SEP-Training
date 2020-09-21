import React, {Component} from 'react';

class TodoList extends Component {
    
    render() {
        const {todoList, deleteTodo} = this.props;

        return (
            <div className="App">
                <ul>
                    {
                        todoList.map((item) => {
                            return (
                            <li>
                                {item.body} <button onClick={() => deleteTodo(item.id)}>Delete</button>
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