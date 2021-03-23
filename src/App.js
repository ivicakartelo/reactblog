import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import { render } from '@testing-library/react';
import { Navbar, NavbarBrand } from 'reactstrap';

import Menu from './components/MenuComponent';
import { MENUS } from './shared/menus';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: MENUS
    };
  }
  render() {
    return (
      <div>   
        <Navbar dark color="primary">
          <div className="container"> 
            <NavbarBrand href="/">Blog</NavbarBrand>
          </div> 
        </Navbar>
        <Menu menus={this.state.menus} />
      </div>      
    );
  } 
}
export default App;
