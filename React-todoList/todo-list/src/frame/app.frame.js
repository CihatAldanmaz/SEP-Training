import React from 'react';
import TodoContainer from '../todo-Container/App-todoContainer'
import Header from '../header/app.header'
import styled from 'styled-components';
import Register from "../register/app.register"
import {} from "../redux/effects"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const Content = styled.div`
    position: absolute;
    width:100%;
    top:1.5rem;
    height: calc(100% - 1.5rem);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
`
const Frame = () => {
    return ( 

        <div style={{width:"100vw",height: "100vh"}}>
            <Header></Header>
            <Content>
            <Switch>
                <Route path="/todos" component={TodoContainer} />
                <Route path="/dashboard">
                    dashboard
                </Route>
                <Route path="/register" component={Register}/>
                <Route path="/">
                    home
                </Route>
                
            </Switch >
            </Content>
        </div>
    );
}

export default Frame;