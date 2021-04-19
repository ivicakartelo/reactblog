import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Menudetail from './MenudetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
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
    const MenuWithId = ({match}) => {
      return(
          <Menudetail menu={this.state.menus.filter((menu) => menu.menu_id === parseInt(match.params.menuId,10))[0]}
            comments={this.state.comments.filter((comment) => comment.menuId === parseInt(match.params.menuId,10))} />
            );
    };
    return (
      <div>
        <Header />
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu menus={this.state.menus} />} />
              <Route path='/menu/:menuId' component={MenuWithId} />
              <Route exact path='/contactus' component={Contact} />
              <Route exact path='/aboutus' component={() => <About authors={this.state.authors} />} />
              <Redirect to="/home" />
          </Switch>       
        <Footer />
      </div>
    );
  }
}

export default Main;