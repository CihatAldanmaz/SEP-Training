import axios from "axios";
import { createStore, applyMiddleware } from "redux";

//action types
const ADD_TODO = "ADD_TODO";

//action creators
export const addTodo = (text) => ({ type: ADD_TODO, text });

//initial state
const initialState = { todos: [] };

//thunk
export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      const { data } = axios.get(`https://jsonplaceholder.typicode.com/todos`);
      dispatch(addTodo(data || initialState));
    } catch (error) {
      console.log(error);
    }
  };
};

//reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos] };
    default:
      return state;
  }
};

const store = createStore(reducer);

store.dispatch(addTodo("Create todolist"));
store.dispatch(addTodo("Implement Redux"));

export default store;
