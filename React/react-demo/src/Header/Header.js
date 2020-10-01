import React from 'react';
import Heading from '../Heading/Heading';
// import './Header.css';
// CSS module
import style from './Header.module.css';

class Header extends React.Component {
  render() {
    const { header, title } = this.props.dataFromApp;
    const { clickHandle, counter } = this.props;
    console.log(header, title);
    return (
      <header className={style['header']}>
        Header: {counter}
        <Heading clickHandle={clickHandle} title={title}></Heading>
      </header>
    );
  }
}

export default Header;
