import React from "react";
import "./Header.css";
import logo from "../Assets/shopping-location-icon-vector.jpg";
import { BiSearchAlt2 } from "react-icons/bi";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-search-container gap-3">
        <div className="logo-cont">
          <img src={logo} alt="logo" />
          <h1 className="text-lg font-semibold">DiscountFinder</h1>
        </div>

        <div className="search-container">
          <BiSearchAlt2 />
          <input type="text" placeholder="Enter a product" />
        </div>
      </div>
    </div>
  );
};

export default Header;
