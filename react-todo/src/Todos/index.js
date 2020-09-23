import React from 'react';

class Todos extends React.Component {
    render() {
        return (
            <div className="todo-container">
                {
                    this.props.todos.map((todo, i) => (
                        todo && (
                            <div className="todo-item" key={i}>
                                <input type="checkbox" onClick={() => this.props.handleCompleteTodo(i)} />
                                {
                                    todo.completed ? (<strike>{todo.text}</strike>) : (<span>{todo.text}</span>)
                                }
                                <button onClick={() => this.props.handleDeleteTodo(i)}>x</button>
                            </div>)
                    )
                    )
                }
            </div>
        )
    }
}

export default Todos;