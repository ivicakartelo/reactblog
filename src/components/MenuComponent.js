import React from 'react';
import { Card, CardImg, CardImgOverlay,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function Menu(props) {
  const menu = props.menus.menus.map((menu) => {
    return (      
      <div className="col-12 col-md-6" key={menu.menu_id}>
        <RenderMenuItem menu={menu} />
      </div>              
    );
  })
  
function RenderMenuItem ({menu}) { 
    return (
      
          <Card>
            <Link to={`/menu/${menu.menu_id}`} >
            <CardImg width="100%" src={baseUrl + menu.image} alt={menu.name} />
            <CardImgOverlay>
              <CardTitle>{menu.name}</CardTitle>
            </CardImgOverlay>
            </Link>
          </Card>                          
    );
};  

if (props.menus.isLoading) {
  return(
      <div className="container">
          <div className="row">            
              <Loading />
          </div>
      </div>
  );
}
else if (props.menus.errMess) {
  return(
      <div className="container">
          <div className="row"> 
              <div className="col-12">
                  <h4>{props.menus.errMess}</h4>
              </div>
          </div>
      </div>
  );
}
else

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