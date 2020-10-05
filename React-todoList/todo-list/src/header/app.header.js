import React, { useState } from 'react';
import styled from 'styled-components';
import { selectAll } from "../redux/selectors";
import { connect } from "react-redux";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Header = ({todos,finishedTodos}) => {
    // const [showRegister,setShowRegister] = useState(false);
    // const [showLogin,setShowLogin] = useState(false);
    return (
        <HeaderContainer>
                    <Link to="/"> Home |</Link>
                    <Link to="/Dashboard"> Dashboard |</Link>
                    <Link to="/Todos"> Todos |</Link>
                    <Link to="/register"> Register |</Link>
                    <span> todosTotal : {todos?.length} |</span>
                    <span> FinishedTotal : {finishedTodos?.length} </span>   
                    {/* <button onClick={()=>setShowRegister(true)}>register</button>  */}
                    
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
position: fixed;
top: 0;
left: 0;
right: 0;
height: 1.5rem;
width: 100%;
font-size: 1.5em;
color: palevioletred;
background-color: rgba(255, 105, 135, .3);
box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
z-index:1;
`
export default connect(selectAll,null)(Header);