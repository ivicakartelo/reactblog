import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import MenuDetail from './MenudetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import { MENUS } from '../shared/menus';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { AUTHORS } from '../shared/authors';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        menus: MENUS,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        authors: AUTHORS
    };
  }

  render() {
    const HomePage = () => {
      return(
          <Home 
              menu={this.state.menus.filter((menu) => menu.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              author={this.state.authors.filter((author) => author.featured)[0]}
          />
      );
    }
    return (
      <div>
        <Header />
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu menus={this.state.menus} />} />
              <Route exact path='/contactus' component={Contact} />
              <Redirect to="/home" />
          </Switch>       
        <Footer />
      </div>
    );
  }
}

export default Main;