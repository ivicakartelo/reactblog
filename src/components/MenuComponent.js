import React, { Component } from 'react';
//import { Media } from 'reactstrap';
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

  renderMenu(menu) {
    if (menu != null)
      return(
        <div className="row">
        <div  className="col-12 col-sm-6">
          <Card>
            <CardImg top src={menu.image} alt={menu.name} />
            <CardBody>
              <CardTitle>{menu.name}</CardTitle>
              <CardText>{menu.content}</CardText>
            </CardBody>
          </Card>
          </div>
          <div  className="col-12 col-sm-6">
          <Card>
            <CardImg top src={menu.image} alt={menu.name} />
            <CardBody>
              <CardTitle>{menu.name}</CardTitle>
              <CardText>{menu.content}</CardText>
            </CardBody>
          </Card>
        </div></div>
      );
    else
      return(
        <div></div>
      );
}

  render() {
    const menu = this.props.menus.map((menu) => {
    return (
        <div  className="col-sm-6">
          <Card key={menu.menu_id} onClick={() => this.onMenuSelect(menu)}>
            <CardImg src={menu.image} alt={menu.name} />
            <CardImgOverlay>
              <CardTitle>{menu.name}</CardTitle>
            </CardImgOverlay>
            <CardBody>
              <p>dsčlk,fldsf,sdčlfć,fsldfms,ć</p>
            </CardBody>
          </Card>
        </div>
      );
    });
  
    return (
      <div className="container">
        <div className="row">          
          {menu}             
        </div>
                    
          {this.renderMenu(this.state.selectedMenu)}           
        
        <div className="row">          
          <Menudetail selectedMenu={this.state.selectedMenu} />          
        </div>
      </div>
    );
  }
}  
export default Menu;      