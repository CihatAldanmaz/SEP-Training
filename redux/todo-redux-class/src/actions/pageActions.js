import {DASHBOARD, TODOLIST} from './types';

export const dashboard = () => dispatch => {
    dispatch({
        type: DASHBOARD,
    })
}

export const todoList = () => dispatch => {
    dispatch({
        type: TODOLIST,
    })
}