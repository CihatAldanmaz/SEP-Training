import React from 'react';
import { store } from './myRedux';
import { actionCreater } from './myRedux';

class CounterTest extends React.Component {
  state = {
    counter: store.getState(),
  };
  render() {
    return <h1>CounterTest: {this.state.counter}</h1>;
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        counter: store.getState(),
      });
    });
  }
}

class ReduxCounterApp extends React.Component {
  state = {
    counter: store.getState(),
  };

  handleIncreament = () => {
    alert('CHANGE!!!');
    store.dispatch(actionCreater.incrementDelay());
  };

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        counter: store.getState(),
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.handleIncreament}>increment</button>
        <CounterTest></CounterTest>
      </div>
    );
  }
}

export default ReduxCounterApp;
