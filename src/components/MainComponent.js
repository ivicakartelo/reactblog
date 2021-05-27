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
import { postComment, fetchMenus, fetchComments, fetchPromos, fetchAuthors } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const mapStateToProps = state => {
  return {
    menus: state.menus,
    comments: state.comments,
    promotions: state.promotions,
    authors: state.authors
  }
}

const mapDispatchToProps = dispatch => ({
  
  postComment1: (menuId, rating, author, comment) => dispatch(postComment(menuId, rating, author, comment)),
  fetchMenus1: () => { dispatch(fetchMenus())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchAuthors: () => dispatch(fetchAuthors())

});

class Main extends Component {
  componentDidMount() {
    this.props.fetchMenus1();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchAuthors();
  }

  render() {
    const HomePage = () => {
      return(
          <Home 
              menu={this.props.menus.menus.filter((menu) => menu.featured)[0]}
              menusLoading={this.props.menus.isLoading}
              menusErrMess={this.props.menus.errMess}
              promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
              promoLoading={this.props.promotions.isLoading}
              promoErrMess={this.props.promotions.errMess}
              author={this.props.authors.authors.filter((author) => author.featured)[0]}
              authorLoading={this.props.authors.isLoading}
              authorErrMess={this.props.authors.errMess}
          />
      );
    }
    const MenuWithId = ({match}) => {
      return(
          <Menudetail menu={this.props.menus.menus.filter((menu) => menu.menu_id === parseInt(match.params.menuId,10))[0]}
          isLoading={this.props.menus.isLoading}
            errMess={this.props.menus.errMess}
            comments={this.props.comments.comments.filter((comment) => comment.menuId === parseInt(match.params.menuId,10))}
            commentsErrMess={this.props.comments.errMess}
            postComment1={this.props.postComment1} />
            );
    };
    return (
      <div>
        <Header />
        <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
              <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu menus={this.props.menus} />} />
                    <Route path='/menu/:menuId' component={MenuWithId} />
                    <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                    <Route exact path='/aboutus' component={() => <About authors={this.props.authors} />} />
                    <Redirect to="/home" />
                </Switch>   
          </CSSTransition>
          </TransitionGroup>     
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));