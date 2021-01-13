import React from "react";

function Jumbotron({ children }) {
  return (
    <div className="hero">
      <div className="hero-body"> 
        <h1> Made With <br></br> Love & Care</h1>
        <button>Order Online</button>
        <p>or call us at 888-888-8888</p>
      </div>
      {children}
    </div>
  );
}

export default Jumbotron;
