import React, { Component } from 'react'

export default class NavBar extends Component {

    render() {
        const {handleDashBoardClick, handleTodoClick} = this.props;
        return (
            <div>
                <nav>
                    <button onClick={ handleDashBoardClick}>DashBoard</button> | 
                    <button onClick={ handleTodoClick}>Todo</button>
                </nav>
            </div>
        )
    }
}
