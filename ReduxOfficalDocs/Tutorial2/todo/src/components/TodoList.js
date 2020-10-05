/**
 * TodoList.js -- 就是总UI界面，包含
 *                      <input/> & Add Todo按钮 -------------- AddTodo.js
 *                      下拉list显示todo内容 ------------------ Todo.js
 *                      最下面的filter ------------------------ VisibilityFilters.js
 */

/**
 * 这个TodoList.js是负责rendering the list of todos. 所以需要从store读取data
 * In order to enable TodoList.js to read data from store, 我们需要调用connect with the mapStateToProps parameter, a function
 * describing which part of the data we need from the store.
 * 
 * Our 🔥<Todo />🔥 commponent takes the todo item as 🔥props🔥. We have this information from the ByIds field of the todos.
 * However, we also need the information from the allIds field off the store indicating which todos and in what order they 
 * should be rendered.
 * Our mapStateToProps function may look like this:

// ...other imports
import { connect } from "react-redux";

const TodoList = // ... UI component implementation

const mapStateToProps = state => {
  const { byIds, allIds } = state.todos || {};
  const todos =
    allIds && allIds.length
      ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
      : null;
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
 * 
 */

import React from 'react';

import { connect } from 'react-redux';
import Todo from './Todo';

import { getTodosByVisibilityFilter } from '../redux/selectors';
// import { VISIBILITY_FILTERS } from '../constants'


//...UI component implementation
const TodoList = ({ todos }) => (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo, index) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : "No todos, yay!"}
    </ul>
  );

//mapStateToProps 接收entire store state，返回当前component需要的从store更新过的data
// const mapStateToProps = state => { //accept an entire store state as an input parameter
//     const { byIds, allIds } = state.todos || {};
//     const todos = allIds && allIds.length ? //<<-- ?
//         allIds.map(
//             id => (
//                 byIds ?
//                     { ...byIds[id], id } :
//                     null
//             )
//         ) : //<<-- :
//         null; //<<-- end
//     return { todos };//mapStateToProps是要return 一个object
// };

// export default connect(mapStateToProps)(TodoList);//component里的TodoList需要用connect这个function来读取store里的内容

//用了selector之后
// export default connect(state => ({todos: getTodos(state)}))(TodoList);
/**
 * Now our <TodoList /> is connected to the store. It should receive the list of todos, map over them, and pass each todo to the <Todo />
 * component. <Todo /> will in turn render them to the screen.
 */


//用了selector和visibility_filter之后
const mapStateToProps = state => {
    const {visibilityFilter} = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return {todos};
};

export default connect(mapStateToProps)(TodoList);