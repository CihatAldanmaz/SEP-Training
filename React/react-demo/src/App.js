import React from 'react';
import Header from './Header/Header';
import Counter from './Counter/Counter';
import './App.css';

class App extends React.Component {
  dataFromApp = {
    header: 'header',
    title: 'Counter App',
  };

  clickHandle = (dataFromChildren) => {
    alert(dataFromChildren);
  };

  state = {
    counter: 0,
  };

  clickHandlCounter = (newCounter) => {
    this.setState({
      counter: newCounter,
    });
  };

  render() {
    return (
      <>
        <Header
          counter={this.state.counter}
          clickHandle={this.clickHandle}
          dataFromApp={this.dataFromApp}
        ></Header>
        <Counter clickHandlCounter={this.clickHandlCounter}></Counter>
      </>
    );
  }
}

export default App;
