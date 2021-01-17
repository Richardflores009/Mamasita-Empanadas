import React from "react";
import Cart from '../components/Cart';
import breakfastMenu from '../assets/json/breakfast.json';
import lunchMenu from '../assets/json/lunch.json';
import dessertMenu from '../assets/json/dessert.json';
import MenuCard from '../components/MenuCard';
import pdfMenu from '../assets/pdf/pdfMenu.pdf';
var buttonStyle = {
  margin: '10px 10px 10px 0'
};

const Menu = () => {

  return (
    <section>
        <h1 className="content-title">Menu</h1>
        
        <button> <a className="download" style={buttonStyle} href={pdfMenu} download>Printable Menu</a> </button>
        
        <p className="sub-content-title">- Breakfast -</p>
        <div className="menu-wrapper">
          {breakfastMenu.map(bmenu => (
              <MenuCard
              id={bmenu.id}
              name={bmenu.name}
              price={bmenu.price}
              image={bmenu.image}
          />
          ))}
        </div>

        <p className="sub-content-title">- Lunch/Dinner -</p>
        <div className="menu-wrapper">
          {lunchMenu.map(lmenu => (
              <MenuCard
              id={lmenu.id}
              name={lmenu.name}
              price={lmenu.price}
              image={lmenu.image}
          />
          ))}
        </div>

        <p className="sub-content-title">- Dessert- </p>
        <div className="menu-wrapper">
          {dessertMenu.map(dmenu => (
              <MenuCard
              id={dmenu.id}
              name={dmenu.name}
              price={dmenu.price}
              image={dmenu.image}
          />
          ))}
        </div>


      <Cart />
    </section>
  );
};

export default Menu;