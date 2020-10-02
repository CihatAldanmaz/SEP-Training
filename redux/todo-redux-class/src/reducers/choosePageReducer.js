import {DASHBOARD, TODOLIST} from '../actions/types';

const initialState = {
    currentPage: 'dashboard'
}

export default function(state = initialState, action) {
    switch(action.type) {
        case DASHBOARD:
            return {
                ...state,
                currentPage: 'dashboard'
            }
        case TODOLIST: 
            return {
                ...state,
                currentPage: 'todolist'
            }
        default:
            return state;   
    }
}