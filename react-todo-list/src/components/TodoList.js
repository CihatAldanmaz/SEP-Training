import React from "react";
import TodoItem from "./TodoItem";

// import { connect } from "react-redux";

function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList

// const mapStateToProps = (state) => {
//   console.log("Mapping state to props", state);
//   return { todos: state.todos };
// };

// const ConnectedTodos = connect(mapStateToProps)(TodoList);

// export default ConnectedTodos;
