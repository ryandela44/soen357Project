import React from "react";
import "./Header.css";
import logo from "../Assets/shopping-location-icon-vector.jpg";
import { BiSearchAlt2, BiUser, BiCart } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { useUser } from '../UserContext/UserContext';


const Header = () => {
  const { user } = useUser();
  return (
    <div className="header-container">
      <div className="logo-search-container gap-3">
      <div className="headerMenuIcon">
        <AiOutlineMenu className="h-6 w-6" />
        </div>
        <div className="logo-cont">
          <img src={logo} alt="logo" />
          <h1 className="text-lg font-semibold">DiscountFinder</h1>
        </div>

        <div className="search-container">
          <BiSearchAlt2/>
          <input type="text" placeholder="Enter a product" />
        </div>

        <div className="profile">
          <h1>{user ? user.email : 'Username'}</h1> {/* Display user email or default text */}
          <div className="headerIcon">
            <BiUser className="w-5 h-5"/>
          </div>

          <div className="headerIcon">
            <BiCart className="w-5 h-5"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
