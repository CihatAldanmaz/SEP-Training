import todoListReducer from './todoList';
// import loggedReducer from './isLogged';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    todoListReducer
});

export default allReducers;