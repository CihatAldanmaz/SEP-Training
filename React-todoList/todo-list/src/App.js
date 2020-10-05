import React from 'react';
import { ThemeProvider } from "react-jss";
import Frame from './frame/app.frame'
import { createUseStyles } from "react-jss";
import { BrowserRouter as Router } from 'react-router-dom';
const theme = {
  backgroundColor: "transparent",
  color: "white"
};
const App = () => {
  const classes = useStyle();
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Frame></Frame>
      </ThemeProvider>
    </Router>
  );
}

const useStyle = createUseStyles({
  appRoot: {
    height: "100vh",
    width: '100vw',
  }
})


export default App;