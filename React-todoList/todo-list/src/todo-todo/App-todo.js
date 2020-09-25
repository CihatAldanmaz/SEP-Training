import { toggleTodo } from "../redux/actions"
import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
const Todo = ({ todo, toggleTodo }) => (
    <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
        {todo && todo.completed ? "👌" : "👋"}{" "}
        <span>
            {todo.text}
        </span>
    </li>
)

export default connect(
    null,
    { toggleTodo }
)(Todo);