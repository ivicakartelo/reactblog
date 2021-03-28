import React, { Component } from 'react';

import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';

class Menudetail extends Component {
  render() {
    const menudetail = this.props.selectedMenu;
    if (menudetail != null)
        return (
        <div className="container">
          <div className="row">               
            <div className="col-12 mt-5">
            <Card>
            <CardImg top src={menudetail.image} alt={menudetail.name} />
            <CardBody>
              <CardTitle>{menudetail.name}</CardTitle>
              <CardText>{menudetail.content}</CardText>
            </CardBody>
          </Card>             
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