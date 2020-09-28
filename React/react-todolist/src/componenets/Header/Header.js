import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header-list">
        <Logo></Logo>
        <nav className="nav">
          <a>DashBoard</a>
          <a>TodoList</a>
        </nav>
      </div>
    );
  }
}

export default Header;
