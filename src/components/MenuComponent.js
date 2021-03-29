import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';
import Menudetail from './MenudetailComponent';

class Menu extends Component {
  constructor(props) {
  super(props);
  this.state = {
      selectedMenu: null
    } 
  }

  onMenuSelect(menu) {
    this.setState({ selectedMenu: menu});
  } 

  render() {
    const menu = this.props.menus.map((menu) => {
    return ( 
      <div className="col-12 col-sm-3">
        <Card key={menu.menu_id} onClick={() => this.onMenuSelect(menu)}>
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
            <Menudetail selectedMenu={this.state.selectedMenu} />
        </div>               
      </div>                          
    );
  }
}  
export default Menu;      