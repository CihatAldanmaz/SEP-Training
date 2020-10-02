import React, { Component } from 'react'
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default class Todo extends Component {
    render() {
        return (
            <>
                <header><h1>Todo List</h1></header>
                <TodoForm />
                <TodoList />
            </>
        )
    }
}
