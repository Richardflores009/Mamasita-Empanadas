import React from "react";
import Cart from '../components/Cart';

const Story = () => {
  return (
    <section className="our-story">
      <div className="story-top">
          <p>
            It all started with a passion...
          </p>
      </div>

      <div class="content-title">Our Story</div>

      <div className="story-div">
        <div className="story-div-left">
          <div className="chef-img"></div>
        </div>
        <div className="story-div-right">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
      </div>

      <div className="inside"></div>

      <div className="our-values">
        <div class="sub-content-title">Our Values</div>
        <p>
          To achieve the best tasting food, we know that getting our ingredients from local farms makes a big difference.
          Using the freshest, most organic ingredients ensures that every batch of empanadas we make are the best. 
          We know that, by consistently following our values, you will enjoy every empanada you buy.
        </p>
      </div>

      <div className="our-partners">
        <div class="sub-content-title">Our Partners</div>
        <div class="partner-wrapper">

          <div className="partner-item">
            <a href="https://www.citifarms.com/" target="_blank"><div className="partner-1"></div></a>
            <p>CitiFarms</p>
          </div>
          
          <div className="partner-item">
            <a href="http://mayasfarm.com/" target="_blank"><div className="partner-2"></div></a>
            <p>Mayas Farm</p>
          </div>
          
          <div className="partner-item">
            <a href="http://www.doublecheckranch.com/" target="_blank"><div className="partner-3"></div></a>
            <p>Double Check Ranch
            </p>
          </div>
            
        </div>

      </div>
      <Cart />
    </section>
  );
};

export default Story;