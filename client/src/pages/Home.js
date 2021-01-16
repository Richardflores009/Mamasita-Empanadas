import React from "react";
import Jumbotron from '../components/Jumbotron';
import Cart from '../components/Cart';

const Home = () => {
  return (
    <section className="container">
      <Cart />

      <Jumbotron/>
    </section>
  );
};

export default Home;
