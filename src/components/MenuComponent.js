import React from 'react';
import { Card, CardImg, CardImgOverlay,
  CardTitle } from 'reactstrap';

//class Menu extends Component {
function RenderMenuItem ({menu, onClick}) { 
  //render() {
    //const menu = this.props.menus.map((menu) => {
    return ( 
      <div key={menu.menu_id}>
        <Card onClick={() => onClick(menu.menu_id)}>
            <CardImg src={menu.image} alt={menu.name} />
            <CardImgOverlay>
              <CardTitle>{menu.name}</CardTitle>
            </CardImgOverlay>
          </Card>
      </div>                     
      );
};  
const Menu = (props) => {
  const menu = props.menus.map((menu) => {
    return (
      <div>
        <RenderMenuItem menu={menu} onClick={props.onClick} />
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
export default Menu;      