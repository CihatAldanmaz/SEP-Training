import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchTodos} from '../actions/todoActions';
import {withRouter, Link} from 'react-router-dom';

class NavBar extends Component {
    componentDidMount() {
        this.props.fetchTodos();
    }
    render() {
        const {todos, handleDashBoard, handleTodoList} = this.props;
        return (
            <div>
                <nav>
                    <b>TodoList</b> |
                    <Link to="/">Dashboard</Link> |
                    <Link to="/todolist">TodoList</Link> |
                    {/* <button onClick={handleDashBoard}>DashBoard</button> |
                    <button onClick={handleTodoList}>Todo List</button> | */}
                    Todo Count: {todos.length}
                </nav>
                <hr />
            </div>
        )
    }
}

NavBar.propTypes = {
    fetchTodos: PropTypes.func.isRequired,
    // dashboard: PropTypes.func.isRequired,
    // todoList: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    todos: state.todos.items
})
export default withRouter(connect(mapStateToProps, {fetchTodos})(NavBar));
