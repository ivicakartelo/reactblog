import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import MenuDetail from './MenudetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
      <Header />
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
        <Footer />
      </div>
    );
  }
}

export default Main;