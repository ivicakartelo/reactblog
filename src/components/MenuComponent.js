import React from 'react';
import { Card, CardImg, CardImgOverlay,
  CardTitle } from 'reactstrap';
  
function RenderMenuItem ({menu}) { 
    return ( 
      
          <Card key={menu.menu_id}>
            <CardImg src={menu.image} alt={menu.name} />
            <CardImgOverlay>
              <CardTitle>{menu.name}</CardTitle>
            </CardImgOverlay>
          </Card>                          
    );
};  
const Menu = (props) => {
  const menu = props.menus.map((menu) => {
    return (      
      <div className="col-12 col-md-6">
        <RenderMenuItem menu={menu} />
      </div>              
    );
  });

  return (  
    <div className="container">
    <div className="row">                   
          {menu}
        </div>  
    </div>                             
  );
}

export default Menu;      