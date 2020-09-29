import React, { Component } from 'react';
import { getAllTodos, deleteTodo, addTodo } from '../../apis/TodoAPI';


class TodoListRender extends Component {
    state = {
        todolist: [],
      };
  
    HandleAddTodo = (newTodo) => {
    addTodo(newTodo).then((data) => {
        this.setState({
        todolist: [data, ...this.state.todolist],
        });
    });
    };
  
    handleRemoveTodo = (id) => {
    deleteTodo(id)
        .then((data) => {
        this.setState({
            todolist: this.state.todolist.filter((todo) => todo.id !== id),
        });
        })
        .catch((err) => {
        console.warn(err);
        });
    };
  
    componentDidMount() {
    getAllTodos().then((data) => {
        this.setState({
        todolist: data,
        });
    });
    }

    render() {
        return (
            <div>
                {this.props.render(this.HandleAddTodo, this.handleRemoveTodo, this.state.todolist)}
            </div>
        )
    }
}

export default TodoListRender
