import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-subcontainer">
        <div className="navbar">
          <ul>
            <li>
              <div className="list-cont">
                <a href="#">Home</a>
              </div>
            </li>
            <li>
              <div className="list-cont">
                <a href="#">Shops</a>
              </div>
            </li>
            <li>
              <div className="list-cont">
                <a href="#">Discounts</a>
              </div>
            </li>
            <li>
              <div className="list-cont">
                <a href="#">Blog</a>
              </div>
            </li>
            <li>
              <div className="list-cont">
                <a href="#">Contact</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
