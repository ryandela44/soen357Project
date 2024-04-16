// Home.js
import React from "react";
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
    const handleLocationSelect = (lat, lng) => {
        console.log("Selected Location:", lat, lng);
    };
  return (
    <div className="home-container">
      <div>
        <Header className="header-container" />
      </div>
      <div className="deal-row">
        <div className="title-row">
          <h1>Exclusive Deals</h1>
        </div>
        <div className="cards-row">
          <Card
            title="Limited Time Offer"
            images={[diapers, milk]} // Ensure it's an array
            text="Popular sales"
            isCarousel={false}
          />
          <Card
            title="Discounts"
            images={[margarine]} // Single image should also be in an array
            text="Featured Sales"
            isCarousel={false}
          />
          <Card
            title="Clearances"
            images={[phone]} // Single image should also be in an array
            text="Featured Sales"
            isCarousel={false}
          />
        </div>
      </div>
      <div className="cat-row">
        <h1 className="title-row">Categories</h1>
        <div className="cards-row">
          <Card title="Clothing" images={[redDress]} isCarousel={false} />
          <Card title="Groceries" images={[milk]} isCarousel={false} />
          <Card title="Electronics" images={[macbook]} isCarousel={false} />
          <Card title="Cosmetics" images={[lipstick]} isCarousel={false} />
          <Card title="Fresh Produce" images={[oranges]} isCarousel={false} />
        </div>
      </div>
      <div className="prod-row1">
        <h1 className="title-row">Over 50% Off at Walmart</h1>
        <div className="cards-row">
          <Card images={[phone]} text="Samsung S8+ Phone" isCarousel={false} />
          <Card images={[dogfood]} text="Dog Food" isCarousel={false} />
          <Card images={[limes]} text="Green Limes" isCarousel={false} />
          <Card
            images={[macbook]}
            text="Macbook Pro 13 inch"
            isCarousel={false}
          />
        </div>
      </div>
       
      <div className="prod-row2">
        <h1 className="title-row">Over 30% Off at IGA</h1>
        <div className="cards-row">
          <Card images={[broccoli]} text="Broccoli" isCarousel={false} />
          <Card images={[ketchup]} text="Heinz Ketchup" isCarousel={false} />
          <Card images={[margarine]} text="Margarine" isCarousel={false} />

        </div>
      </div>
       <GoogleMapComponent onLocationSelect={handleLocationSelect} />
      <div className="footer">
        <p>Copyright © 2024 DiscountFinder. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Home;
