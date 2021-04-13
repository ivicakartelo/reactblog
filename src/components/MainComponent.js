import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import MenuDetail from './MenudetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { MENUS } from '../shared/menus';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        menus: MENUS,
    };
  }

  render() {
    const HomePage = () => {
      return(
          <Home />
      );
    }
    return (
      <div>
        <Header />
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu menus={this.state.menus} />} />
              <Redirect to="/home" />
          </Switch>       
        <Footer />
      </div>
    );
  }
}

export default Main;