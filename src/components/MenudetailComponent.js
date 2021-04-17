import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';



    function RenderMenudetails({menu}) {
    return (
      <Card>
        <CardImg top src={menu.image} alt={menu.name} />
        <CardBody>
          <CardTitle>{menu.name}</CardTitle>
          <CardText>{menu.content}</CardText>
        </CardBody>
      </Card>             
    );       
  }

  function RenderComments({comments}) {
    const cmt = comments.map((w) => {
      return (
        <li key={w.id}>
          <p>{w.rating}</p>
          <p>{w.comment}</p>
          <p>
            -- {w.author}, &nbsp;
          {new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
          }).format(new Date(w.date))}
          </p>
        </li>
      )
    })
    return(
      <div>
        <h5>Comments</h5>
          <ul className="list-unstyled">
            {cmt}
          </ul>
      </div>
    );
  }
  
    const Menudetail = (props) => {

      if (props.menu != null) {
        return ( 
          
            <div className="container">
              <div className="row">
                <Breadcrumb>
                  <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                  <BreadcrumbItem active>{props.menu.name}</BreadcrumbItem>
                </Breadcrumb>
              <div className="col-12">
              < h3>{props.menu.name}</h3>
                <hr />
              </div>
            </div>
              <div className="row">
                <div className="col-12 col-md">
                  <RenderMenudetails menu = {props.menu} />
                </div>                           
                <div className="col-12 col-md">
                  <RenderComments comments = {props.comments} />
                </div>
              </div>
            </div>              
        );
    }
    else {
      return (
        <div></div>
      );
    }
  }

  export default Menudetail;