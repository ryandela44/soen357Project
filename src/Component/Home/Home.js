import React from "react";
import Slider from "react-slick";
import Header from "../Header/Header";
import Card from "../Card/Card";
import "./Home.css";
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

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
    ],
  };
  const handleLocationSelect = (lat, lng) => {
    console.log("Selected Location:", lat, lng);
  };
  return (
    <div className="home-container">
      <Header />
      <div className="deal-row">
        <h1 className="title-row">Exclusive Deals</h1>
        <div className="cards-row">
          <Card
            title="Limited Time Offer"
            images={[diapers, milk]}
            text="Popular sales"
          />
          <Card title="Discounts" images={[margarine]} text="Featured Sales" />
          <Card title="Clearances" images={[phone]} text="Featured Sales" />
        </div>
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
      <div className="prod1-row">
        <h1 className="title-row">Over 50% Off at Walmart</h1>
        <div className="cards-row">
          <Card images={[phone]} text="Samsung S8+ Phone" />
          <Card images={[dogfood]} text="Dog Food" />
          <Card images={[limes]} text="Green Limes" />
          <Card images={[macbook]} text="Macbook Pro 13 inch" />
        </div>
      </div>
      <div className="prod2-row">
        <h1 className="title-row">Over 30% Off at IGA</h1>
        <div className="cards-row">
          <Card images={[broccoli]} text="Broccoli" />
          <Card images={[ketchup]} text="Heinz Ketchup" />
          <Card images={[margarine]} text="Margarine" />
        </div>
      </div>
      <div className="mb-10">
        <h1 className="pl-40 text-2xl">Find Your Nearby Shops</h1>
      <GoogleMapComponent onLocationSelect={handleLocationSelect} />
      </div>
      <div className="footer">
        <p>Copyright © 2024 DiscountFinder. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Home;
