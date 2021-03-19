import React, { Component } from 'react';
//import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';

class Menu extends Component {
  constructor(props) {
  super(props);
  this.state = {
      selectedMenu: null
  }
  console.log('Menu component constructor is invoked');
  alert('Menu component constructor is invoked');
}

componentDidMount() {
  console.log('Menu component componentDidMount is invoked');
  alert('Menu component componentDidMount is invoked');
}

onMenuSelect(menu) {
  this.setState({ selectedMenu: menu});
}

renderMenu(menu) {
  if (menu != null)
      return(
          <Card>
              <CardImg top src={menu.image} alt={menu.name} />
              <CardBody>
                <CardTitle>{menu.name}</CardTitle>
                <CardText>{menu.content}</CardText>
              </CardBody>
          </Card>
      );
  else
      return(
          <div></div>
      );
}

render() {
  const menu = this.props.menus.map((menu) => {
      return (
        <div  className="col-12 col-md-5 m-1">
          <Card key={menu.menu_id}
            onClick={() => this.onMenuSelect(menu)}>
            <CardImg width="100%" src={menu.image} alt={menu.name} />
            <CardImgOverlay>
                <CardTitle>{menu.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
  });
  console.log('Menu component render is invoked');
  alert('Menu component render is invoked');
  return (
      <div className="container">
          <div className="row">
              {menu}
          </div>
          <div className="row">
            <div  className="col-12 m-1">
              {this.renderMenu(this.state.selectedMenu)}
            </div>
          </div>
      </div>
  );
}
  }
  
  export default Menu;      