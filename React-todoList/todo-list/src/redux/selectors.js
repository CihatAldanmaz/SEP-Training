
export const selectFinished = (state)=>{
    const finishedTodos = state.todos.filter(todo=>todo.completed);
    return {finishedTodos};
}

export const selectUnfinished = (state)=>{
    const todos = state.todos.filter(todo=>!todo.completed);
    return {todos};
}

export const selectAll = (state)=>{
    const finishedTodos = state.todos.filter(todo=>todo.completed);
    const todos = state.todos.filter(todo=>!todo.completed);
    return {finishedTodos,todos}
}

export const selectAuth = (state)=>{
    const AuthState = state.userAuth;
    return {AuthState};
}

