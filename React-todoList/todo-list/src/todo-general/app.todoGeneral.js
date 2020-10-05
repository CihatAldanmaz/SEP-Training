import React, { useState, useEffect } from 'react';
const todoGeneral = () => {
    const [todos, setTodos] = useEffect();
    const addTodo = (todo) => setTodos({ ...todos, setTodos });
    const getTodos = () => todos;
    const toggoleTodo = (id) => setTodos.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
    )
}

export default todoGeneral;