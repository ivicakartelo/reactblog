import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';

class Menu extends Component {
  
  render() {
    const menu = this.props.menus.map((menu) => {
    return ( 
      <div className="col-12 col-sm-3">
        <Card key={menu.menu_id} onClick={() => this.props.onClick(menu.menu_id)}>
            <CardImg src={menu.image} alt={menu.name} />
            <CardImgOverlay>
              <CardTitle>{menu.name}</CardTitle>
            </CardImgOverlay>
          </Card>
      </div>                     
      );
    });  
    return (
      <div>
        <div className="container">
          <div className="row">
            {menu}
          </div>
            
        </div>               
      </div>                          
    );
  }
}  
export default Menu;      