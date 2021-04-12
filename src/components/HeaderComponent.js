import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
  render() {
    return(
    <React.Fragment>
      <Navbar dark>
        <div className="container">
            <NavbarBrand href="/">Blog</NavbarBrand>
        </div>
      </Navbar>
      <div className="row-header">
           <div className="container">
               <div className="row">
                   <div className="col-12 col-sm-6">
                       <h1>Blog</h1>
                       <p>LKM s,c lsc lc dcv dvld df dlsc lsdmc lmsdc slmc dsc slc slcm slmcs!</p>
                   </div>
               </div>
           </div>
       </div>
    </React.Fragment>
    );
  }
}

export default Header;