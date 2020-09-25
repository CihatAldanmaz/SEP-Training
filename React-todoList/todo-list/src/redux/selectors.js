
export const selectFinished = (state)=>{
    const todos = state.todos.filter(todo=>todo.completed);
    return {todos};
}

export const selectUnfinished = (state)=>{
    const todos = state.todos.filter(todo=>!todo.completed);
    return {todos};
}


