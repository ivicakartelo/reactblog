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
import { addComment, fetchMenus } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';


const mapStateToProps = state => {
  return {
    menus: state.menus,
    comments: state.comments,
    promotions: state.promotions,
    authors: state.authors
  }
}

const mapDispatchToProps = dispatch => ({
  
  addComment1: (menuId, rating, author, comment) => dispatch(addComment(menuId, rating, author, comment)),
  fetchMenus1: () => { dispatch(fetchMenus())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}

});

class Main extends Component {
  componentDidMount() {
    this.props.fetchMenus1();
  }

  render() {
    const HomePage = () => {
      return(
          <Home 
              menu={this.props.menus.menus.filter((menu) => menu.featured)[0]}
              menusLoading={this.props.menus.isLoading}
              menusErrMess={this.props.menus.errMess}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              author={this.props.authors.filter((author) => author.featured)[0]}
          />
      );
    }
    const MenuWithId = ({match}) => {
      return(
          <Menudetail menu={this.props.menus.menus.filter((menu) => menu.menu_id === parseInt(match.params.menuId,10))[0]}
          isLoading={this.props.menus.isLoading}
            errMess={this.props.menus.errMess}
            comments={this.props.comments.filter((comment) => comment.menuId === parseInt(match.params.menuId,10))} 
            addComment1={this.props.addComment1} />
            );
    };
    return (
      <div>
        <Header />
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu menus={this.props.menus} />} />
              <Route path='/menu/:menuId' component={MenuWithId} />
              <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
              <Route exact path='/aboutus' component={() => <About authors={this.props.authors} />} />
              <Redirect to="/home" />
          </Switch>       
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));