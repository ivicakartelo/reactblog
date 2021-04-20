import React from 'react';
import { Card, CardImg, CardImgOverlay,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
  
function RenderMenuItem ({menu}) { 
    return (
      
          <Card>
            <Link to={`/menu/${menu.menu_id}`} >
            <CardImg src={menu.image} alt={menu.name} />
            <CardImgOverlay>
              <CardTitle>{menu.name}</CardTitle>
            </CardImgOverlay>
            </Link>
          </Card>                          
    );
};  
const Menu = (props) => {
  const menu = props.menus.map((menu) => {
    return (      
      <div className="col-12 col-md-6" key={menu.menu_id}>
        <RenderMenuItem menu={menu} />
      </div>              
    );
  });

  return (  
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>                
                      
          {menu}
        </div>  
    </div>                             
  );
}

export default Menu;      