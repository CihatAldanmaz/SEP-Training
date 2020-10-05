import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css';
import TodosCount from '../TodosCount/TodosCount';
import WithTodosData from '../WithTodosData/WithTodosData';
import { Link } from 'react-router-dom';
import { MyLink } from '../../MyRouter/MyRouter';

class Header extends React.Component {
  render() {
    const { handleChangeActivePage } = this.props;
    return (
      <div className="header-list">
        <Logo></Logo>
        <nav className="nav">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/todolist">TodoList</Link>
          <MyLink to="/home">HOME</MyLink>
          <MyLink to="/about">About</MyLink>
        </nav>
        <WithTodosData>
          {(_, __, todolist) => <TodosCount todolist={todolist}></TodosCount>}
        </WithTodosData>
      </div>
    );
  }
}

export default Header;
