import API from '../utils/api';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const FETCH_DATA = 'FETCH_DATA';

export const HANDLE_FORM_CHANGE = 'HANDLE_FORM_CHANGE';
export const HANDLE_FORM_SUBMIT = 'HANDLE_FORM_SUBMIT';

function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo
    }
}

function deleteTodo(i) {
    return {
        type: DELETE_TODO,
        i
    }
}

function completeTodo(i) {
    return {
        type: COMPLETE_TODO,
        i
    }
}

function fetchData(todos) {
    return {
        type: FETCH_DATA,
        todos
    }
}

export function handleGetTodo() {
    return (dispatch) => {
        return API.handleFetchData().then((data) => {
            console.log(data);
            dispatch(fetchData(data));
        })
    }
}

export function handleAddTodo(text) {
    return (dispatch) => {
        return API.handleAddTodo(text).then((data) => {
            console.log('add to do');
            dispatch(addTodo(data));
        })
    }
}

export function handleCompleteTodo(i) {
    return (dispatch) => {
        return API.handleCompleteTodo(i).then((data) => {
            console.log(i);
            console.log('complete to do');
            dispatch(completeTodo(i));
        })
    }
}

export function handleDeleteTodo(i) {
    return (dispatch) => {
        return API.handleDeleteTodo(i).then((data) => {
            console.log('delete to do');
            dispatch(deleteTodo(i));
        })
    }
}

//form

export function handleFormChange(input) {
    return {
        type: HANDLE_FORM_CHANGE,
        input
    }
}

export function handleFormSubmit() {
    return {
        type: HANDLE_FORM_SUBMIT
    }
}

export function handleFormSubmitBind() {
    return (dispatch, getState) => {
        const state = getState();
        const { form: { input } } = state;

        if (input) {
            dispatch(handleAddTodo(input));
            dispatch(handleFormSubmit);
        }
        else {
            alert('Input should not be empty');
        }
    }
}