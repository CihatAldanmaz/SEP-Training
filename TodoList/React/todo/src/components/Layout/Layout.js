import React from 'react';
import Header from '../Header/Header';

class Layout extends React.Component{
  render(){
    const {children} = this.props;
    return(
      <>
      <Header />
        <div className='todolist_container'>
          {children}
        </div>
      </>
    );
  };
};

export default Layout;