import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

  function RenderMenudetails({menu}) {
    if (menu != null) {
    return (
    <div>
      <Card>
        <CardImg src={menu.image} alt={menu.name} />
        <CardBody>
          <CardTitle>{menu.name}</CardTitle>
          <CardText>{menu.content}</CardText>
        </CardBody>
      </Card> 
    </div>            
    );       
  }
  else {
    return (
        <div></div>
    );
  }
}

  function RenderComments({menu}) {
    if (menu != null && menu.comments != null) {

      return menu.comments.map(review => (      
        <div key={review.id}>
          <div><h4>Comments</h4></div>
          <div>
          <p>{review.rating}</p>
          <p>{review.comment}</p>
          </div>
          <div>
                    
          <p>
            -- {review.author}, &nbsp;
          {new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
          }).format(new Date(review.date))}
          </p>
          </div>
        </div>
      ));
  }
        else {
          return (
              <div></div>
          );
      }
  } 
  const  Menudetail = (props) => {

      return ( 
        <div>
          <div>
              <RenderMenudetails menu={props.menu} />
            </div>
            <div>
              <RenderComments comments={props.menu} />
            </div>
        </div>
                        
        );
    }
    
  export default Menudetail;