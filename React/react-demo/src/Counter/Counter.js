import React from 'react';
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'My App',
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { clickHandlCounter } = this.props;
    // console.log('setState 1');
    this.setState((preState) => {
      clickHandlCounter(preState.counter + 1);
      return {
        counter: preState.counter + 1,
      };
    });

    // this.setState({
    //   counter: this.state.couter + 1,
    // });
    // this.setState({
    //   counter: this.state.couter + 1,
    // });
    // console.log('setState 2');

    // this.setState((preState) => {
    //   return {
    //     counter: preState.counter + 1,
    //   };
    // });
  }

  render() {
    const { clickHandlCounter } = this.props;
    return (
      <>
        <h4>Counter: {this.state.counter}</h4>
        <button onClick={this.handleClick}>increament</button>
      </>
    );
  }
}

export default Counter;
