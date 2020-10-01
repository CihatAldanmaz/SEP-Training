import React from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './index.css';
import './App.css';


class Content extends React.Component {
  render() {
    return <section>Content</section>
  }
}


class Header extends React.Component {
  render() {
    return <header>Header</header>
  }
}


class layout extends React.Component {
  render() {
    return 
    <>
    </>
  }
}


class DemoApp extends React.Component {
  render() {
    return <h1>DemoApp</h1>
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return <h1>Hello World!</h1>
  }
}

export default App;
