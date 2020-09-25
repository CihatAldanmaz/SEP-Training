import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createTodo} from '../actions/todoActions';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: "",
            errMsg: ""
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
        const newTodo = {
            title: todo,
            completed: false
        }
        this.props.createTodo(newTodo);
        
    
    }
    render() {
        const {todo, errMsg} = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        value={todo}
                        name="todo"
                        onChange={this.handleChange} />
                    <button type="submit">Add</button>
                </form>
                <p>{errMsg}</p>
                <hr />
            </div>
        )
    }
}
TodoForm.propTypes = {
    createTodo: PropTypes.func.isRequired
};

export default connect(null, {createTodo})(TodoForm);