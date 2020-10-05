import { ADD_TODO, SET_FILTER, TOGGLE_TODO } from './actionTypes';

//这个nextTodoId是用来增加新添加的todo的id，新添加一个todo就要id+1，这样才能每个todo有自己的id
let nextTodoId = 0

//把这个action creator export出去，所以在别的js文件里可以用
export const addTodo = content => ({ //这个action要传进来一个content parameter，所以这个action被dispatch给store的时候，能带上新添加的todo内容
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId, //id+1是在这里增加的
        content //带上新添加的todo内容
    }
})

//把这个action creator export出去，所以在别的js文件里可以用
export const toggleTodo = id => ( //这个action要传进来一个id parameter，来定位要toggle哪一个todo
    {
        type: TOGGLE_TODO,
        payload: {
            id
        }
    }
);

export const setFilter = filter => (
    {
        type: SET_FILTER,
        payload: {
            filter
        }
    }
);