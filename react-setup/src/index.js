import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home/Home';
import '../src/index.scss';

// import 'index.scss';
class HelloMessage extends React.Component {
    render() {
        return <Home />;
        // return React.createElement('div', null, 'Hello ', this.props.name);
    }
}

ReactDOM.render(<HelloMessage />, document.getElementById('root'));