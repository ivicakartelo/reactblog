import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';

class Menudetail extends Component {

  componentDidMount() {
    console.log("Menudetail Component componentDidMount invoked");
}

  componentDidUpdate() {
    console.log("Menudetail Component componentDidUpdate invoked");
}

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

      console.log("Menudetail Component render invoked");

      if (this.props.menu != null) {
        return ( 
        <div className="container">        
          <div className="row">
            <div className="col-12 col-sm-6">
              {this.renderMenudetails(this.props.menu)}
            </div>
            <div className="col-12 col-sm-6">
              {this.renderComments(this.props.menu.comments)}
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
}
  export default Menudetail;