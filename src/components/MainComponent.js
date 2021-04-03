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

  onMenuSelect(menuId) {
    this.setState({ selectedMenu: menuId});
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Blog</NavbarBrand>
          </div>
        </Navbar>
        <Menu menus={this.state.menus} onClick={(menuId) => this.onMenuSelect(menuId)} />
        <MenuDetail menu={this.state.menus.filter((menu) => menu.menu_id === this.state.selectedMenu)[0]} />
      </div>
    );
  }
}

export default Main;