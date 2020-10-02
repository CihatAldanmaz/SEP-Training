import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Counter from './Counter/Counter';

class Clock extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      timer: new Date().toLocaleTimeString(),
    };
  }

  render() {
    return <h1>Clock Timer: {this.state.timer}</h1>;
  }
  componentDidMount() {
    this._clockInterval = setInterval(() => {
      console.log('change timer');
      this.setState({
        timer: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._clockInterval);
  }
}
class Content extends React.Component {
  render() {
    const { children } = this.props;
    return <section className="content">{children}</section>;
  }
}
class Header extends React.Component {
  render() {
    return <header className="header">Header</header>;
  }
}

class Layout extends React.Component {
  constructor(...args) {
    super(...args);
    console.log('Layout constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Layout getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('Layout componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('Layout shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('Layout getSnapshotBeforeUpdate');
  }
  componentDidUpdate() {
    console.log('Layout componentDidUpdate');
  }

  render() {
    console.log('Layout render');
    const { children } = this.props;
    console.log(children);
    return (
      <>
        <Header></Header>
        <Content>{children}</Content>
      </>
    );
  }
}

class Footer extends React.PureComponent {
  render() {
    console.log('Footer render');
    const { content } = this.props;
    return <footer>{content}</footer>;
  }

  componentDidUpdate() {
    console.log('Footer componentDidUpdate');
  }
}
class DemoApp extends React.Component {
  state = {
    timer: 100,
    showTimer: true,
    footerContent: 'This is a footer',
  };

  constructor(...args) {
    super(...args);
    console.log('DemoApp constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('DemoApp getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('DemoApp componentDidMount');
    console.log(document.getElementById('demoApp'));
  }

  shouldComponentUpdate() {
    console.log('DemoApp shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('DemoApp getSnapshotBeforeUpdate');
  }
  componentDidUpdate() {
    console.log('DemoApp componentDidUpdate');
  }

  render() {
    console.log('DemoApp render');
    return (
      <div id="demoApp">
        <Layout>
          <button
            onClick={() => {
              console.log('======UPdate STate ======');
              this.setState({
                timer: 200,
              });
            }}
          >
            update Timer
          </button>
          <button
            onClick={() => {
              console.log('======UPdate STate ======');
              this.setState({
                showTimer: false,
              });
            }}
          >
            Remove Timer
          </button>
          {this.state.showTimer ? (
            <Clock timer={this.state.timer}></Clock>
          ) : (
            <h1>Do not show Timer</h1>
          )}
        </Layout>

        <Footer content={this.state.footerContent}></Footer>
      </div>
    );
  }
}

ReactDOM.render(<DemoApp></DemoApp>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
