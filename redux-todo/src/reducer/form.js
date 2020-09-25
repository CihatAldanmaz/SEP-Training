import { HANDLE_FORM_CHANGE, HANDLE_FORM_SUBMIT } from '../action/todo';

export default function form(state = { input: ' ' }, action) {
    switch (action.type) {
        case HANDLE_FORM_CHANGE:
            console.log(action.input);
            return {
                ...state,
                input: action.input
            }
        case HANDLE_FORM_SUBMIT:
            console.log(state.input);
            return {
                ...state,
                input: ''
            }
        default:
            return state;
    }
}