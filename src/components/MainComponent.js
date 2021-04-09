import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import MenuDetail from './MenudetailComponent';
import { MENUS } from '../shared/menus';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        menus: MENUS,
        selectedMenu: null
    };
  }

  componentDidMount() {
    console.log("Main Component componentDidMount invoked");
}

  componentDidUpdate() {
    console.log("Main Component componentDidUpdate invoked");
}

  onMenuSelect(menuId) {
    this.setState({ selectedMenu: menuId});
  }

  render() {

    console.log("Main Component render invoked");

    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Blog</NavbarBrand>
          </div>
        </Navbar>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-4">
              <Menu menus={this.state.menus} onClick={(menuId) => this.onMenuSelect(menuId)} />
            </div>
            <div className="col-12 col-sm-8">
              <MenuDetail menu={this.state.menus.filter((menu) => menu.menu_id === this.state.selectedMenu)[0]} />
          </div>
        </div>
        
        </div>
        
        
      </div>
    );
  }
}

export default Main;