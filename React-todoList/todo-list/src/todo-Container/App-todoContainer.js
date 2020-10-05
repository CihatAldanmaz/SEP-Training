import React, { useState, useEffect } from 'react';
import TodoInput from "../todo-Input/App-todoInput"
import { Container, FormHelperText } from '@material-ui/core';
import { addTodo } from '../redux/actions'
import { connect } from "react-redux";
import { UnfinishedTodoList, FinishedTodoList } from "../todo-list/App-creatTodoList";
import { createUseStyles, useTheme } from "react-jss";
import styled from "styled-components"
const TodoListContainer = styled.div`
    position: absolute;
    display: grid;
    background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
    border-radius: 5px;
    border: 0;
    color: white;
    width: 500px;
    height: 400px;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
    grid-template-columns: 50% 50%;
    grid-template-rows: 25% 75%;
`
const TwoListsContainer = styled.div`
    position: absolute;
    width:100%;
    height:200px;
    grid-column-start: 1;
    grid-column-end: auto;
    grid-row-start: 2;
    grid-row-end: auto;
`
const SingleListContainer = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    padding: 0.5rem;
    box-sizing: border-box;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: auto;
`
const SingleListContainer2 = styled(SingleListContainer)`
    grid-column-start: 2;
    grid-column-end: auto;
`
const InputContainer = styled.div`
    position:absolute;
    width:100%;
    grid-column-start: 1;
    grid-column-end: auto;
    grid-row-start: 1;
    grid-row-end: auto;
`
const TodoContainer = (props) => {

    const classes = useStyle();
    return (
        <TodoListContainer>
            <InputContainer>
                <TodoInput></TodoInput>
            </InputContainer>
            <SingleListContainer>
                <UnfinishedTodoList promps={"No todos!"}></UnfinishedTodoList>
            </SingleListContainer>
            <SingleListContainer2>
                <FinishedTodoList promps={"No finished!"}></FinishedTodoList>
            </SingleListContainer2>
        </TodoListContainer>

    );
}
const useStyle = createUseStyles({
    container: {
        
    },
    TodoListsContainer: {
        position: "absolute",
        width:"100%",
        height:"85%",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    SingleTodoListContainer:{
        position:"absolute",
        width:"30%",
        height:"95%",
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