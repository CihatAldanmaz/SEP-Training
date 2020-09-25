import React, { useState, useEffect } from 'react';
import TodoInput from "../todo-Input/App-todoInput"
import { Container, FormHelperText } from '@material-ui/core';
import { addTodo } from '../redux/actions'
import { connect } from "react-redux";
import { UnfinishedTodoList, FinishedTodoList } from "../todo-list/App-creatTodoList";
import { createUseStyles, useTheme } from "react-jss";
const TodoContainer = (props) => {

    const classes = useStyle();
    return (
        <div className={classes.container}>
            <TodoInput></TodoInput>
            <div className={classes.TodoListsContainer}>
                <div className={classes.SingleTodoListContainer}>
                    <h3>Todos</h3>
                    <UnfinishedTodoList promps={"No todos!"}></UnfinishedTodoList>
                </div>
                <div className={classes.SingleTodoListContainer}>
                    <h3>Finished</h3>
                    <FinishedTodoList promps={"No finished!"}></FinishedTodoList>
                </div>
            </div>
        </div>

    );
}
const useStyle = createUseStyles({
    container: {
        position: "absolute",
        flexFlow: "column",
        alignItems: 'center',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 'auto',
        width: '60%',
        maxHeight: '80%vh',
        padding: '20px 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        top: "50%",
        left: "50%",
        transform: 'translate(-50%,-50%)'
    },
    TodoListsContainer: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    SingleTodoListContainer:{
        width:"50%",
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
    }

});
export default connect(
    null,
    { addTodo }
)(TodoContainer);;