import React from 'react';
import './TodoList.css';
import TodoItem from './TodoItem/TodoItem';
import { Todo } from '../../model/Todo';
import { withTodos } from '../../hoc/withTodos'

class TodoList extends React.Component {
    state = {
        inputText: ''
    };

    // handleRemoveTodo = (id) => {
    //     // deleteTodo(id)
    //     //   .then((data) => {
    //     //     this.setState({
    //     //       todolist: this.state.todolist.filter((todo) => todo.id !== id),
    //     //     });
    //     //   })
    //     //   .catch((err) => {
    //     //     console.warn(err);
    //     //   });
    // };

    // handlerRemove = (event) => {
    //     // event delegation
    //     if (event.target.className === 'btn-remove') {
    //         const id = event.target.id;
    //         deleteTodo(+id)
    //             .then((data) => {
    //                 this.setState({
    //                     todolist: this.state.todolist.filter((todo) => +todo.id !== +id),
    //                 });
    //             })
    //             .catch((err) => {
    //                 console.warn(err);
    //             });
    //     }
    // };
    handleInputOnChange = (event) => {
        this.setState({ inputText: event.target.value });
    };
    handleInputKeyUp = (event) => {
        if (event.key === 'Enter') {
            const useId = 1;
            const title = this.state.inputText;
            const completed = false;
            const newTodo = new Todo(useId, title, completed);
            const { handleAddTodo } = this.props;
            handleAddTodo(newTodo);
            this.setState({
                inputText: '',
            });
            // addTodo(newTodo).then((data) => {
            //     this.setState({
            //         inputText: '',
            //         todolist: [data, ...this.state.todolist],
            //     });
            // });
        }
    };
    render() {
        const { handleRemoveTodo, todoList } = this.props;
        return (
            <section className="todolist">
                <header className="todolist__header">
                    <h4 className="heading">TodoList</h4>
                </header>
                <input
                    type="text"
                    className="todolist__input"
                    placeholder="What are you going to do?"
                    onChange={this.handleInputOnChange}
                    onKeyUp={this.handleInputKeyUp}
                    value={this.state.inputText}
                />
                <ul className="todolist__content">
                    {todoList.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            removeTodo={() => handleRemoveTodo(todo.id)}
                        ></TodoItem>
                    ))}
                </ul>
            </section>
        );
    }

    // componentDidMount() {
    //     getAllTodos().then((data) => {
    //         this.setState({
    //             todolist: data,
    //         });
    //     });
    // }
}

// console.log(withTodos(TodoList));
export default TodoList;