import React, { Component } from 'react';
import Main from './components/MainComponent';

class App extends Component {

  componentDidMount() {
    console.log("App Component componentDidMount invoked");
}

  componentDidUpdate() {
    console.log("App Component componentDidUpdate invoked");
}
  
  render() {

    console.log("App Component render invoked");

    return (
      <div>   
        <Main />         
      </div>
    );
  } 
}
export default App;