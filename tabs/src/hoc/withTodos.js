import React from 'react';
import { getAllTodos, deleteTodo, addTodo } from '../apis/TodoAPI';


export const withTodos = (WrappedComponent) =>
    class NewComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                todoList: []
            }
            this.handleAddTodo = this.handleAddTodo.bind(this);
            this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
        };
        handleAddTodo(newTodo) {
            addTodo(newTodo).then((data) => {
                this.SetState({
                    todoList: [...this.state.todoList, data]
                });
            })
        }
        handleRemoveTodo(id) {
            deleteTodo(id).then((data) => {
                this.setState({
                    todoList: this.state.todoList.filter((todo) => todo.id !== id)
                })
            }).catch((e) => { console.log(e) })
        }
        componentDidMount() {
            getAllTodos().then((data) => {
                this.setState({
                    todoList: data
                })
            })
        }
        render() {
            return (
                <WrappedComponent todoList={this.state.todoList} handleAddTodo={this.handleRemoveTodo} handleRemoveTodo={this.handleRemoveTodo}></WrappedComponent>
            )
        }
    }

// export const withTodos = (WrappedComponent) =>
//     class NewComponent extends React.Component {
//         state = {
//             todoList: [],
//         };

//         HandleAddTodo = (newTodo) => {
//             addTodo(newTodo).then((data) => {
//                 this.setState({
//                     todoList: [data, ...this.state.todoList],
//                 });
//             });
//         };

//         handleRemoveTodo = (id) => {
//             deleteTodo(id)
//                 .then((data) => {
//                     this.setState({
//                         todoList: this.state.todoList.filter((todo) => todo.id !== id),
//                     });
//                 })
//                 .catch((err) => {
//                     console.warn(err);
//                 });
//         };

//         componentDidMount() {
//             getAllTodos().then((data) => {
//                 console.log(data);
//                 this.setState({
//                     todoList: data,
//                 });
//             });
//         }
//         render() {
//             console.log(this.state.todoList, 1);
//             return (
//                 <WrappedComponent
//                     todolist={this.state.todoList}
//                     handleRemoveTodo={this.handleRemoveTodo}
//                     HandleAddTodo={this.HandleAddTodo}
//                 ></WrappedComponent>
//             );
//         }
//     };