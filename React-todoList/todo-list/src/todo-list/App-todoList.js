import { connect } from "react-redux";
import React from "react";
import { toggleTodo } from "../redux/actions"
import { selectUnfinished } from "../redux/selectors";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';
import { emphasize } from "@material-ui/core/styles/colorManipulator";

const TodoList = ({ todos, toggleTodo, finishedTodos, promps}) => {
    const classes = useStyles({
        backgroundColor: "transparent",
        hoverBackgroundColor: "#757575"
    });
    todos = todos? todos:finishedTodos;
    return (
        <div className={classes.container}>
        <List className={classes.root}>
            {todos && todos.length
                ? todos.map((todo, index) => {
                    return (
                        <ListItem key={todo.id} className={classes.item} onClick={() => toggleTodo(todo.id)}>
                            <ListItemAvatar>
                                <Avatar>
                                    <WorkIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={todo.text} />
                        </ListItem>
                    )
                        ;
                })
                : promps}
            {/* <Todo key={`todo-${todo.id}`} todo={todo} /> */}
        </List>
        </div>
    );
}

const useStyles = makeStyles((theme) =>
    ({
        container:{
            position:"absolute",
            borderRadius :"4px",
            boxSizing:"border-box",
            height: "calc(100% - 1rem)",
            overflow: 'scroll',
            width: "calc(100% - 1rem)",
            padding: "0.2rem",
            border:"thin solid rgba(0, 0, 0, 0.23)" 
        },
        root: {
            color: "white",
            maxWidth: 200,
            overflow: true,
            backgroundColor: ({ backgroundColor }) => backgroundColor,
        },
        item: {
            maxWidth: 200,
            "&:hover, &:focus": {
                backgroundColor: ({ hoverBackgroundColor, backgroundColor }) =>
                    hoverBackgroundColor
                        ? hoverBackgroundColor
                        : emphasize(backgroundColor, 0.08)
            },
        }
    }));

export default TodoList;