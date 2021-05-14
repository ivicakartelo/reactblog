import React from 'react';
import { Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody,
  Button, Row, Col, Label, CardImg, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

    function RenderMenudetails({x}) {
    return (
      <Card>
        <CardImg top src={baseUrl + x.image} alt={x.name} />
        
        <CardBody>
          <CardTitle>{x.name}</CardTitle>
          <CardText>{x.content}</CardText>
        </CardBody>
      </Card>             
    );       
  }

  function RenderComments({comments, addComment1, menuId}) {
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
          <CommentForm menuId={menuId} addComment1={addComment1} />
      </div>
    );
  }
  
    const Menudetail = (props) => {

      if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.menu != null) {
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
                  <RenderMenudetails x = {props.menu} />
                </div>                           
                <div className="col-12 col-md">
                  <RenderComments comments = {props.comments} 
                  addComment1={props.addComment1}
                  menuId={props.menu.menu_id} />
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

  const maxLength = len => val => !val || val.length <= len;
  const minLength = len => val => val && val.length >= len;
      
      class CommentForm extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            isModalOpen: false
          };
          this.toggleModal = this.toggleModal.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        toggleModal() {
          this.setState({
            isModalOpen: !this.state.isModalOpen
          });
        }
      
        handleSubmit(values) {
          this.toggleModal();
          this.props.addComment1(this.props.menuId, values.rating, values.author, values.comment);
        }
      
        render() {
          return (
            <div>
              <Button outline onClick={this.toggleModal}>
                <span className="fa fa-pencil"></span> Submit Comment
              </Button>
      
              <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                  <LocalForm onSubmit={values => this.handleSubmit(values)}>
                  <Row className="form-group">
                                          <Label htmlFor="rating" md={2}>Rating</Label>
                                          <Col md={10}>
                                              <Control.select model=".rating" id="rating" name="rating"
                                                  className="form-control"
                                                  defaultValue="1">
                                                  <option value="1">1</option>
                                                  <option value="2">2</option>
                                                  <option value="3">3</option>
                                                  <option value="4">4</option>
                                                  <option value="5">5</option>
                                              </Control.select>
                                          </Col>
                                      </Row>
                    <Row className="form-group">
                      <Label htmlFor="author" md={2}>
                        Your Name
                      </Label>
                      <Col md={10}>
                        <Control.text
                          model=".author"
                          id="author"
                          name="author"
                          placeholder="Your Name"
                          className="form-control"
                          validators={{
                            minLength: minLength(3),
                            maxLength: maxLength(15)
                          }}
                        />
                        <Errors
                          className="text-danger"
                          model=".author"
                          show="touched"
                          messages={{
                            minLength: "Must be greater than 2 characters",
                            maxLength: "Must be 15 characters or less"
                          }}
                        />
                      </Col>
                    </Row>
      
                    <Row className="form-group">
                      <Label htmlFor="message" md={2}>
                        Comment
                      </Label>
                      <Col md={10}>
                        <Control.textarea
                          className="form-control"
                          id="comment"
                          model=".comment"
                          name="comment"
                          rows="6"
                        />
                      </Col>
                    </Row>
      
                    <Row className="form-group">
                      <Col md={{ size: 12 }}>
                        <Button color="primary" value="submit">
                          Submit
                        </Button>
                      </Col>
                    </Row>
                  </LocalForm>
                </ModalBody>
              </Modal>
            </div>
          );
        }
      }

  export default Menudetail;