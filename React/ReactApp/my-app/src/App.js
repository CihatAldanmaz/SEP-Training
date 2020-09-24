import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ToDo from './todolist';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'my app',
      number: 0
    }
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {

    this.setState(prevstate => {
      return {number: prevstate.number + 1};
    });
    
    this.setState(prevState => {
      return {number: prevState.number + 1}
    });
  }

  handleDecrement() {
    const number = this.state.number - 1;
    this.setState({number});
  }

  render() {
    return (
      <React.Fragment>
        {/* <h1>Hello {this.state.number}</h1>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button> */}
        <ToDo />
      </React.Fragment>
    );
  }

}

export default App;
