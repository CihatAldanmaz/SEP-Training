import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchTodos} from '../actions/todoActions';

class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchTodos();
    }
    render() {
        const {todos} = this.props;
        return (
            <div>
                Todos Count: {todos.length}
            </div>
        )
    }
}

Dashboard.propTypes = {
    fetchTodos: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    todos: state.todos.items,
})

export default connect(mapStateToProps, {fetchTodos})(Dashboard);