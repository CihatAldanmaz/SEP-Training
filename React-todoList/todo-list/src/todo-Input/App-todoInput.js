import React, { useState, useEffect } from 'react';
import { addTodo } from "../redux/actions";
import { connect } from "react-redux";
import AddBoxIcon from '@material-ui/icons/AddBox';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import { createUseStyles,useTheme } from "react-jss";
const TodoInput = ({ addTodo }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    console.log(classes);
    const [input, setInput] = useState();
    return (
        <div className={classes.container}>
            <TextField
                className={classes.input}
                id="todo-input"
                label="TODO..."
                variant="outlined"
                value={input}
                onKeyUp={(event) => {
                    if (event.key == "Enter") {
                        addTodo(event.target.value);
                        event.target.value = ''
                    }
                }}
                onChange={(event => {
                    setInput(event.target.value)
                })}
            />
            <IconButton
                className={classes.button}
                aria-label="delete"
                onClick={_ => {
                    addTodo(input);
                    setInput('');
                }}>
                <AddBoxIcon style={{ color: 'white' }} />
            </IconButton>
        </div>
    );
}

const useStyles = createUseStyles({
    container: {
        boxSizing: 'border-box',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        padding: 20,
        background: ({ theme }) => theme.backgroundColor,
    },
    input: {
        width:"70%",
        font: {
            size: 40,
            weight: 900
        },
        color: ({ theme }) => theme.color
    },
    button: {
        left: "10px",
        background: ({ theme }) => theme.backgroundColor,
        color: ({ theme }) => theme.color,
    }
});

export default connect(null, { addTodo })(TodoInput);