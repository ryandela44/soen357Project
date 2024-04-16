import React, { useState } from "react";
import "./Header.css";
import logo from "../Assets/shopping-location-icon-vector.jpg";
import { BiSearchAlt2, BiUser, BiCart } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { useUser } from '../UserContext/UserContext';

const Header = () => {
    const { user } = useUser();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1080);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 1080);
    };

    React.useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="header-container">
            <div className="logo-search-container gap-3">
                {isMobile && (
                    <div className="headerMenuIcon" onClick={toggleDrawer}>
                        <AiOutlineMenu className="h-6 w-6" />
                    </div>
                )}
                <div className="logo-cont">
                    <img src={logo} alt="logo" />
                    <h1 className="text-lg font-semibold">DiscountFinder</h1>
                </div>

                <div className={`search-container ${drawerOpen ? 'hide' : ''}`}>
                    <BiSearchAlt2/>
                    <input type="text" placeholder="Enter a product" />
                </div>

                <div className={`navbar ${drawerOpen ? 'open' : ''}`}>
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