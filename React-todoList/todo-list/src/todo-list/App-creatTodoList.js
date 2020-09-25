import { selectUnfinished } from "../redux/selectors";
import { selectFinished } from "../redux/selectors";
import { toggleTodo } from "../redux/actions";
import { connect } from "react-redux";
import TodoList from "./App-todoList"

export const UnfinishedTodoList = connect(selectUnfinished, { toggleTodo })(TodoList);
export const FinishedTodoList = connect(selectFinished, { toggleTodo })(TodoList);
