import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';

  function RenderMenudetails(y) {
    return (
      <Card>
        <CardImg src={y.image} alt={y.name} />
        <CardBody>
          <CardTitle>{y.name}</CardTitle>
          <CardText>{y.content}</CardText>
        </CardBody>
      </Card>             
    );       
  }

  function RenderComments(z) {
    const cmt = z.map((w) => {
      return (
        <li key={w.id}>
          <p>{w.rating}</p>
          <p>{w.comment}</p>
          <p>
            -- {w.author}, &nbsp;
          {new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
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
  const  Menudetail = (props) => {

      if (this.props.menu != null) {
        return ( 
        <div>
          <div>
              <RenderMenudetails menu={props.menu} />
            </div>
            <div>
              <RenderComments comments={props.menu.comments} />
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