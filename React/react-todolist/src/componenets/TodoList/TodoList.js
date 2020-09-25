import React from 'react';
import './TodoList.css';
import TodoItem from './TodoItem/TodoItem';

class TodoList extends React.Component {
  state = {
    todolist: [
      { id: 0, userId: 1, title: 'buy a book', completed: false },
      { id: 1, userId: 2, title: 'buy a car', completed: false },
    ],
  };

  render() {
    return (
      <section className="todolist">
        <header className="todolist__header">
          <h4 className="heading">TodoList</h4>
        </header>
        <input
          type="text"
          className="todolist__input"
          placeholder="What are you going to do?"
        />
        <ul className="todolist__content">
          {this.state.todolist.map((todo) => (
            <TodoItem key={todo.id} todo={todo}></TodoItem>
          ))}
        </ul>
      </section>
    );
  }
}

export default TodoList;
