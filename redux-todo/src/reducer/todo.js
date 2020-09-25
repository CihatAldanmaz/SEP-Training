import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, FETCH_DATA } from '../action/todo';

export default function todos(state = [], action) {
    const { i } = action;
    const nextState = [...state];
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.todo];
        case COMPLETE_TODO:
            console.log(nextState, i);
            nextState.forEach((todo) => {
                if (todo.id === i) {
                    todo.completed = !todo.completed;
                }
            })
            return nextState;
        case DELETE_TODO:
            return nextState.filter((todo) => todo.id !== i);
        case FETCH_DATA:
            state = [...action.todos];
            return action.todos;
        default:
            return state;
    }
}