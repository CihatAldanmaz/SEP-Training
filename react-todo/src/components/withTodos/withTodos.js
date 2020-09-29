import React, { Component } from 'react'
import {getAllTodos, addTodo, deleteTodo} from '../../apis/TodoApi';

export default class withTodos extends Component {
    state = {
        todoList: [],
        title: 'TodoApp'
    }

    componentDidMount() {
        getAllTodos()
            .then(data => {
                this.setState({
                    todoList: data
                })
            })
    }

    handleAddTodo = (newTodo) => {
        addTodo(newTodo).then((data) => {
            this.setState({todoList: [data, ...this.state.todoList]})
        })
    }

    handleDeleteTodo = (id) => {
        deleteTodo(id).then((data) => {
            this.setState({
                todoList: this.state.todoList.filter((todo) => todo.id !== id)
            })
        }).catch(err => console.warn(err));
    }

    render() {
        const {render, renderHeader} = this.props;

        return (
            <>
                {/* {
                    renderHeader(this.state.title)
                } */}
                {render(
                    this.handleAddTodo,
                    this.handleDeleteTodo,
                    this.state.todoList
                )}
            </>
        )
    }
}
