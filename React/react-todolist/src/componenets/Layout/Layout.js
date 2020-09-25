import React from 'react';
import Header from '../Header/Header';
import './Layout.css';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <header className="header">
          <Header></Header>
        </header>
        <main className="content">{children}</main>
      </>
    );
  }
}
export default Layout;
