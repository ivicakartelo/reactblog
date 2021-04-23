import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Menudetail from './MenudetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    menus: state.menus,
    comments: state.comments,
    promotions: state.promotions,
    authors: state.authors
  }
}

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const HomePage = () => {
      return(
          <Home 
              menu={this.props.menus.filter((menu) => menu.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              author={this.props.authors.filter((author) => author.featured)[0]}
          />
      );
    }
    const MenuWithId = ({match}) => {
      return(
          <Menudetail menu={this.props.menus.filter((menu) => menu.menu_id === parseInt(match.params.menuId,10))[0]}
            comments={this.props.comments.filter((comment) => comment.menuId === parseInt(match.params.menuId,10))} />
            );
    };
    return (
      <div>
        <Header />
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu menus={this.props.menus} />} />
              <Route path='/menu/:menuId' component={MenuWithId} />
              <Route exact path='/contactus' component={Contact} />
              <Route exact path='/aboutus' component={() => <About authors={this.props.authors} />} />
              <Redirect to="/home" />
          </Switch>       
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));