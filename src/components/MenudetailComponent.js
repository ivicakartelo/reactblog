import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menudetail extends Component {
  render() {
    const menudetail = this.props.selectedMenu;
    if (menudetail != null)
        return (
          <div className="container">
              <div className="row">
                <Media list>
          <div className="col-12 mt-5">
            <Media tag="li" key={menudetail.menu_id}>
              <Media left middle>
                  <Media object src={menudetail.image} alt={menudetail.name} />
              </Media>
              <Media body className="ml-5">
                <Media heading>{menudetail.name}</Media>
                <p>{menudetail.content}</p>
              </Media>
            </Media>
          </div>

          </Media>
              </div>
            </div>
        );
        else
      return(
          <div></div>
      );
        
        }
  }
  export default Menudetail;