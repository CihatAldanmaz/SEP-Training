/**
 * Selectors是用来选择性地更新store里的state，如果state里只有一小部分需要更新，那么selector可以做到只更新那一小部分需要更新的state
 * 而不去更新所有的state，以此来提高性能。
 */
import { VISIBILITY_FILTERS } from '../constants';
//get all todos in store
export const getTodosState = store => store.todos;

//if store has any todos, return all todos' ids, which is an allIds array
export const getTodoList = store =>
    getTodosState(store) ? getTodosState(store).allIds : []

//return the specific todo from store, whose id got updated
export const getTodoById = (store, id) =>
    //if there are todos in the store
    getTodosState(store) ?
        //make a copy of old todo, found by byIds[id]. Then update its id, and return this todo whose id got updated
        { ...getTodosState(store).byIds[id], id } :
        //if there isn't any todos in the store, return {} empty
        {}


//🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
//return the specific todo with specific id parameter, from the store
export const getTodos = store =>
    //allIds array.map(id => return the specific todo with specific id parameter)
    getTodoList(store).map(id => getTodoById(store, id))
//🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥





//加了visibility filter之后，we need to filter todos according to the active filter

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
    const allTodos = getTodos(store);
    switch (visibilityFilter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return allTodos.filter(todo => todo.completed);
        case VISIBILITY_FILTERS.INCOMPLETE:
            return allTodos.filter(todo => !todo.completed);
        case VISIBILITY_FILTERS.ALL:
        default:
            return allTodos;
    }
}