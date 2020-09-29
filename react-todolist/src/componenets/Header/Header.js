import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css';

class Header extends React.Component {

  render() {
    const {handleChangeActivePage} = this.props;
    return (
      <div className="header-list">
        <Logo></Logo>
        <nav className="nav">
          <p onClick={()=>handleChangeActivePage("Dashboard")}>DashBoard</p>
          <p onClick={()=>handleChangeActivePage("Todolist")}>TodoList</p>
        </nav>
      </div>
    );
  }
}

export default Header;
