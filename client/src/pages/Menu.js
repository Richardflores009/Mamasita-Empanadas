import React, { useEffect }from "react";
import { useQuery } from '@apollo/react-hooks';

import { idbPromise } from "../utils/helpers";


import { QUERY_PRODUCTS, QUERY_CATEGORIES } from "../utils/queries";


import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../utils/store/actions";


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
  const state = useSelector(state => state.reducer)
  // const { currentCategory } = state;
  const currentCategory = useSelector(state => state.reducer.currentCategory)


  const dispatch = useDispatch();
const { loading, data } = useQuery(QUERY_PRODUCTS);


useEffect(() => {
  if(data) {
    dispatch(updateProducts(data.products))
    
    data.products.forEach((product) => {
      idbPromise('products', 'put', product);
    });
  } else if (!loading) {
    idbPromise('products', 'get').then((products) => {
      dispatch(updateProducts(products))
    });
  }
}, [data, loading, dispatch]);

// function filterProducts() {
//   if (!currentCategory) {
//     console.log(state.products)
//     return state.products;
//   }
  
//   return state.products.filter(product => product.category._id === currentCategory);
// }
function filterBreakfast() {
  
  return state.products.filter(product => product.description === 'Breakfast');
}
function filterLunch() {
 
  
  return state.products.filter(product => product.description === 'Lunch');
}
function filterDessert() {
  
  return state.products.filter(product => product.description === 'Dessert');
}
  return (
    <section>
        <h1 className="content-title">Menu</h1>
        
        <button> <a className="download" style={buttonStyle} href={pdfMenu} download>Printable Menu</a> </button>
        
        <p className="sub-content-title">- Breakfast -</p>
        
        {state.products.length ? (
         <div className="menu-wrapper">
            {filterBreakfast().map(product => (
                <MenuCard
                  key= {product._id}
                  _id={product._id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  quantity={product.quantity}
                />
            ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
          {/* {state.map(bmenu => (
              <MenuCard
              id={bmenu.id}
              name={bmenu.name}
              price={bmenu.price}
              image={bmenu.image}
          />
          ))} */}
      

        <p className="sub-content-title">- Lunch/Dinner -</p>
        {state.products.length ? (
         <div className="menu-wrapper">
            {filterLunch().map(product => (
                <MenuCard
                  key= {product._id}
                  _id={product._id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  quantity={product.quantity}
                />
            ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}

        <p className="sub-content-title">- Dessert- </p>
        {state.products.length ? (
         <div className="menu-wrapper">
            {filterDessert().map(product => (
                <MenuCard
                  key= {product._id}
                  _id={product._id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  quantity={product.quantity}
                />
            ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}


      <Cart />
    </section>
  );
};

export default Menu;