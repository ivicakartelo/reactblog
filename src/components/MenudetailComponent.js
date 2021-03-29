import React, { Component } from 'react';

import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';

class Menudetail extends Component {
  
  renderMenudetails(y) {
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

  renderComments(z) {
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
    render() {
      if (this.props.selectedMenu != null) {
        return (         
          <div className="row">
            <div className="col-12 col-sm-6">
              {this.renderMenudetails(this.props.selectedMenu)}
            </div>
            <div className="col-12 col-sm-6">
              {this.renderComments(this.props.selectedMenu.comments)}
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
}
  export default Menudetail;