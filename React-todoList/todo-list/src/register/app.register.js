import React, { useState } from 'react';
import styled from "styled-components"
import TextField from '@material-ui/core/TextField';
import {register} from '../redux/effects'
import {selectAuth} from '../redux/selectors'
import {connect} from "react-redux";
import User from '../models/user';
const Container = styled.div`
        position:absolute;
        width: 500px;
        height: 400px;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
        background:linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
`
const mapActionToProps = dispatch => {
    return {register:(user)=>dispatch(register(user))}
}

const Register = ({AuthState,register}) => {
    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");
    return ( 
        <Container>
            <TextField
                label="Email"
                variant="outlined"
                onChange={(event => {
                    setEmail(event.target.value)
                })}/>
            <TextField
                label="Name"
                variant="outlined"
                onChange={(event => {
                    setName(event.target.value)
                })}/>
            <TextField
                label="PassWord"
                variant="outlined"
                onChange={(event => {
                    setPassWord(event.target.value)
                })}/>
            <button onClick={()=>{
                const user = new User({name:name,email:email,password:passWord})
                register(user);
            }}> Register </button>
        </Container>

    );
}
 
export default connect(selectAuth,mapActionToProps)(Register);