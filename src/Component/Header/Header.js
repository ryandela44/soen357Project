import React from "react";
import "./Header.css";
import logo from "../Assets/shopping-location-icon-vector.jpg";
import { BiSearchAlt2, BiUser } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-search-container gap-3">
        <AiOutlineMenu className="h-5 w-auto" />
        <div className="logo-cont">
          <img src={logo} alt="logo" />
          <h1 className="text-lg font-semibold">DiscountFinder</h1>
        </div>

        <div className="search-container">
          <BiSearchAlt2 />
          <input type="text" placeholder="Enter a product" />
        </div>

        <div className="profile">
          <h1>Username</h1> {/* add username here*/}
          <div className="headerIcon">
            <BiUser className="w-5 h-5"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
