import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
      super(props);
  
      this.toggleNav = this.toggleNav.bind(this);
      this.state = {
        isNavOpen: false
      };
    }

    toggleNav() {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    }

  render() {
      return(
          <div>
              <Navbar dark expand="md">
                  <div className="container">
                      <NavbarToggler onClick={this.toggleNav} />
                      <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Blog' /></NavbarBrand>
                      <Collapse isOpen={this.state.isNavOpen} navbar>
                          <Nav navbar>
                          <NavItem>
                              <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                          </NavItem>
                          </Nav>
                      </Collapse>
                  </div>
              </Navbar>
              <div className="row-header">
                  <div className="container">
                      <div className="row row-header">
                          <div className="col-12 col-sm-6">
                              <h1>Blog</h1>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et odio vitae justo aliquam vulputate a tempor magna. In nisl dolor, convallis ac eros in, mollis egestas ante. Sed nec nulla consequat, posuere ante nec, efficitur quam. Etiam ac tristique justo, vitae scelerisque felis. Aenean in gravida tortor, ut pellentesque ligula. Etiam eu dictum diam. Phasellus eu ipsum a justo luctus ornare. Cras egestas tellus id sem egestas hendrerit. </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
  }
}

export default Header;