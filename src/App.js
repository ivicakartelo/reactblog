import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { render } from '@testing-library/react';
import { Navbar, NavbarBrand } from 'reactstrap';

import Menu from './components/MenuComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Blog</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    );
  } 
}
export default App;
