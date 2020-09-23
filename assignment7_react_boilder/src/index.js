import React from 'react';
import ReactDOM from 'react-dom';
import '../src/style.scss';

class HelloMessage extends React.Component {
    render() {
        // return React.createElement('div', null, "Hello ", this.props.name);
      return (
        <div>
          Hello {this.props.name}
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <HelloMessage name="Taylor" />,
    // React.createElement(HelloMessage, {name: 'Duan',}),
    document.getElementById('root')
  );