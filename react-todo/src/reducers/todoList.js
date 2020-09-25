const todoListReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADDTODO':
            return [action.payload, ...state];
        case 'DELETETODO':
            return state.filter((todo) => +todo.id !== action.payload);
        default:
            return state;
    } 
}

export default todoListReducer;