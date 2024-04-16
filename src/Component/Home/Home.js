import React from "react";
import Slider from "react-slick";
import Header from "../Header/Header";
import Card from "../Card/Card";
import './Home.css';
import diapers from "../Assets/Diapers.jpg";
import redDress from "../Assets/redDress.jpg";
import margarine from "../Assets/margarine.jpg";
import phone from "../Assets/Phone.jpg";
import milk from "../Assets/milk.jpg";
import macbook from "../Assets/macbook-air-m2-roundup-header.webp";
import lipstick from "../Assets/revlon-dotcom-pdp-product-hero-lip-super-lustrous-lipstick-soldier-after-glow-309970226541-9x16.png";
import oranges from "../Assets/oranges.jpg";
import dogfood from "../Assets/Dog Food.jpg";
import broccoli from "../Assets/broccoli.jpg";
import ketchup from "../Assets/ketchup.jpg";
import limes from "../Assets/limes.jpg";
import GoogleMapComponent from "../GoogleMap/GoogleMapComponent";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const Home = () => {
    return (
        <div className="home-container">
            <Header />
            <div className="deal-row">
                <h1 className="title-row">Exclusive Deals</h1>
                <Slider {...settings}>
                    <Card title="Limited Time Offer" images={[diapers, milk]} text="Popular sales" />
                    <Card title="Discounts" images={[margarine]} text="Featured Sales" />
                    <Card title="Clearances" images={[phone]} text="Featured Sales" />
                </Slider>
            </div>
            <div className="cat-row">
                <h1 className="title-row">Categories</h1>
                <Slider {...settings}>
                    <Card title="Clothing" images={[redDress]} />
                    <Card title="Groceries" images={[milk]} />
                    <Card title="Electronics" images={[macbook]} />
                    <Card title="Cosmetics" images={[lipstick]} />
                    <Card title="Fresh Produce" images={[oranges]} />
                </Slider>
            </div>
            <div className="prod-row1">
                <h1 className="title-row">Over 50% Off at Walmart</h1>
                <Slider {...settings}>
                    <Card images={[phone]} text="Samsung S8+ Phone" />
                    <Card images={[dogfood]} text="Dog Food" />
                    <Card images={[limes]} text="Green Limes" />
                    <Card images={[macbook]} text="Macbook Pro 13 inch" />
                </Slider>
            </div>
            <div className="prod-row2">
                <h1 className="title-row">Over 30% Off at IGA</h1>
                <Slider {...settings}>
                    <Card images={[broccoli]} text="Broccoli" />
                    <Card images={[ketchup]} text="Heinz Ketchup" />
                    <Card images={[margarine]} text="Margarine" />
                </Slider>
            </div>
            <GoogleMapComponent />
            <div className="footer">
                <p>Copyright © 2024 DiscountFinder. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Home;