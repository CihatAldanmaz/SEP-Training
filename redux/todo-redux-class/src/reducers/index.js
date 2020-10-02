import {combineReducers} from 'redux';
import todoReducer from './todoReducer';
import choosePageReducer from './choosePageReducer';

export default combineReducers({
    todos: todoReducer,
    choosePage: choosePageReducer
})