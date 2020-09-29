import React from 'react';
import { getAllTodos, deleteTodo, addTodo } from '../../apis/TodoAPI';


class ChildComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: []
        }
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    }
    handleAddTodo(newTodo) {
        addTodo(newTodo).then((data) => {
            this.setState({
                todoList: [...this.state.todoList, newTodo]
            })
        })
    }
    handleRemoveTodo(id) {
        deleteTodo(id).then((data) => {
            this.setState({
                todoList: this.state.todoList.filter((todo) => todo.id !== id)
            })
        })
    }
    componentDidMount() {
        getAllTodos().then((data) => {
            this.setState({
                todoList: data
            })
        })
    }

    render() {
        console.log(this.state.todoList, 'child');
        return (
            <div>
                {
                    this.props.render(this.handleAddTodo, this.handleRemoveTodo, this.state.todoList)
                }
            </div>
        )
    }
}

export default ChildComp;