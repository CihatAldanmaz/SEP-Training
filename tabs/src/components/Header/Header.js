import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        const { handleChangeActivePage } = this.props;
        return (
            <div className="header-list">
                <Logo></Logo>
                <nav className="nav">
                    <Link to='/dashboard'>DashBoard</Link>
                    <Link to='/todo'>TodoList</Link>
                    {/* <a onClick={() => { handleChangeActivePage('Dashboard') }}>DashBoard</a>
                    <a onClick={() => handleChangeActivePage('TodoList')}>TodoList</a> */}
                </nav>
            </div>
        );
    }
}

export default Header;