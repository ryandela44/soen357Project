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

const Home = () => {
  return (
    <div className="home-container">
      <div>
      <Header className="header-container"/>
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
      <div className="cards-row">
        <Card title="Clothing" images={[redDress]} isCarousel={false} />
        <Card title="Groceries" images={[milk]} isCarousel={false} />
        <Card title="Electronics" images={[macbook]} isCarousel={false} />
        <Card title="Cosmetics" images={[lipstick]} isCarousel={false} />
      </div>
      </div>
  );
};

export default Home;
