import React from 'react';
import { ThemeProvider } from "react-jss";
import TodoContainer from './todo-Container/App-todoContainer'
import { createUseStyles } from "react-jss";
const theme = {
  backgroundColor: "transparent",
  color: "white"
};
const App = () => {
  const classes = useStyle();
  return (
    
      <ThemeProvider theme={theme}>
        <TodoContainer></TodoContainer>
      </ThemeProvider>
    
  );
}

const useStyle = createUseStyles({
  appRoot : {
    height : "100vh",
    width : '100vw',
  }
})


export default App;