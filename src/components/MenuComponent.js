import React, { Component } from 'react';
import { Media } from 'reactstrap';


class Menu extends Component {
  render() {
    const menu = this.props.menus.map((menu) => {
        return (
          <div key={menu.menu_id} className="col-12 mt-5">
            <Media tag="li">
              <Media left middle>
                  <Media object src={menu.image} alt={menu.name} />
              </Media>
              <Media body className="ml-5">
                <Media heading>{menu.name}</Media>
                <p>{menu.content}</p>
              </Media>
            </Media>
          </div>
        );
    });

        return (
            <div className="container">
              <div className="row">
                <Media list>
                    {menu}
                </Media>
              </div>
            </div>
          );
      }
  }
  
  export default Menu;      