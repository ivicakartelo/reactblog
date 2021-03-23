import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menudetail extends Component {
  render() {
    const menudetail = this.props.selectedMenu;
    if (menudetail != null)
        return (
        <div className="container">
          <div className="row">               
            <div className="col-6 mt-5">
              <Media width="100%" object src={menudetail.image} alt={menudetail.name} />
              <Media body>
                <div className="mt-4">

                <Media heading>{menudetail.name}
                </Media>
                </div>
                <p>{menudetail.content}</p>
              </Media>
              
            </div>
            <div className="col-6 mt-5">
              <Media width="100%" object src={menudetail.image} alt={menudetail.name} />
              <Media body>
              <div className="mt-4">
                <Media heading>{menudetail.name}
                </Media>
                </div>
                <p>{menudetail.content}</p>
              </Media>
            </div>
          </div>
        </div>
        );
    else
      return(
        <div></div>
    );        
  }
}
  export default Menudetail;