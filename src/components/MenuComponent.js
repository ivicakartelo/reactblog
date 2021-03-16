import React, { Component } from 'react';
import { Media } from 'reactstrap';


class Menu extends Component {
    
    constructor(props) {
    
        super(props);

        
        this.state = {
          menus: [
            {
                menu_id: 1,
                name:'Lorem ipsum dolor',
                image: 'assets/images/1.jpg',
                content:'Lorem ipsum dolor sit amet consectetur adipiscing elit Proin orci ligula, fringilla ac venenatis a, aliquam a magna. Donec vitae nisi nec enim fermentum gravida. Cras placerat aliquam mi, eget faucibus sem hendrerit non. Aenean nec mauris efficitur, tincidunt tortor non, pretium augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus ultrices massa in aliquet. In at tellus sit amet nibh eleifend semper non sit amet tortor. Mauris non facilisis tortor, vel volutpat eros. Donec id varius dui nec eleifend augue Nullam ligula eros, finibus id turpis eu imperdiet lobortis mauris Suspendisse turpis sem accumsan sed porta sit amet egestas ut ante Mauris non mauris tincidunt viverra nibh et lobortis ante',
                published:'2021-03-012'},
                
            {
                menu_id: 2,
                name:'Consectetur adipiscing',
                image: 'assets/images/2.jpg',
                content:'Consectetur adipiscing elit Proin orci ligula, fringilla ac venenatis a, aliquam a magna. Donec vitae nisi nec enim fermentum gravida. Cras placerat aliquam mi, eget faucibus sem hendrerit non. Aenean nec mauris efficitur, tincidunt tortor non, pretium augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus ultrices massa in aliquet. In at tellus sit amet nibh eleifend semper non sit amet tortor. Mauris non facilisis tortor, vel volutpat eros. Donec id varius dui nec eleifend augue Nullam ligula eros, finibus id turpis eu imperdiet lobortis mauris Suspendisse turpis sem accumsan sed porta sit amet egestas ut ante Mauris non mauris tincidunt viverra nibh et lobortis ante',            
                published:'2021-03-012'},
            {
                menu_id: 3,
                name:'Dolor sit amet',
                image: 'assets/images/3.jpg',
                content:'Dolor sit amet consectetur adipiscing elit Proin orci ligula, fringilla ac venenatis a, aliquam a magna. Donec vitae nisi nec enim fermentum gravida. Cras placerat aliquam mi, eget faucibus sem hendrerit non. Aenean nec mauris efficitur, tincidunt tortor non, pretium augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus ultrices massa in aliquet. In at tellus sit amet nibh eleifend semper non sit amet tortor. Mauris non facilisis tortor, vel volutpat eros. Donec id varius dui nec eleifend augue Nullam ligula eros, finibus id turpis eu imperdiet lobortis mauris Suspendisse turpis sem accumsan sed porta sit amet egestas ut ante Mauris non mauris tincidunt viverra nibh et lobortis ante',
                published:'2021-03-012'},
            {           
                menu_id: 4,
                name:'Orci ligula',
                image: 'assets/images/4.jpg',
                content:'Orci ligula dolor sit amet consectetur adipiscing elit Proin orci ligula, fringilla ac venenatis a, aliquam a magna. Donec vitae nisi nec enim fermentum gravida. Cras placerat aliquam mi, eget faucibus sem hendrerit non. Aenean nec mauris efficitur, tincidunt tortor non, pretium augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus ultrices massa in aliquet. In at tellus sit amet nibh eleifend semper non sit amet tortor. Mauris non facilisis tortor, vel volutpat eros. Donec id varius dui nec eleifend augue Nullam ligula eros, finibus id turpis eu imperdiet lobortis mauris Suspendisse turpis sem accumsan sed porta sit amet egestas ut ante Mauris non mauris tincidunt viverra nibh et lobortis ante',
                published:'2021-03-012'}
        ]    
      };
    }
 
    render() {
      const menu = this.state.menus.map((menu) => {
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