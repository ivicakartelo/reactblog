import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay,
  CardTitle } from 'reactstrap';

class Menu extends Component {

  componentDidMount() {
    console.log("Menu Component componentDidMount invoked");
}

  componentDidUpdate() {
    console.log("Menu Component componentDidUpdate invoked");
}
  
  render() {

    console.log("Menu Component render invoked");

    const menu = this.props.menus.map((menu) => {
    return ( 
      <div key={menu.menu_id} className="col-12 col-sm-3">
        <Card onClick={() => this.props.onClick(menu.menu_id)}>
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