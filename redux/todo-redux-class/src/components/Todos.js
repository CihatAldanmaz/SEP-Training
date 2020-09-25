import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchTodos, deleteTodo} from '../actions/todoActions';

class Todos extends Component {
    componentDidMount() {
        this.props.fetchTodos();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.newTodo) {
            this.props.todos.unshift(nextProps.newTodo);
        }
    }

    // deleteTodo(todoId) {
    //     this.props.deleteTodo(todoId);
    // }

    render() {
        const {todos} = this.props;
        return (
            <div>
                <ul>
                    {
                        todos.map((todo) => (
                            <li key={todo.id}>{todo.title} - <button onClick={() => this.props.deleteTodo(todo.id)}>Delete</button></li>
                        ))
                    }  
                </ul>
                

            </div>
        )
    }
}

Todos.propTypes = {
    fetchTodos: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
    newTodo: PropTypes.object,
    deleteTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    todos: state.todos.items,
    newTodo: state.todos.item
})

export default connect(mapStateToProps, {fetchTodos, deleteTodo})(Todos);