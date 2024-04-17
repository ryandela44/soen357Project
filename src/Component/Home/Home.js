import React, { useState } from "react";
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
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                autoplay: true,
                autoplaySpeed: 7000
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 7000
            }
        }
    ]
};

const Home = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleCardClick = (product) => {
        console.log("Product clicked:", product);
        setSelectedProduct(product);
        const url = product.url;
        window.open(url, '_blank');
    };

    const handleLocationSelect = (lat, lng) => {
        console.log("Selected Location:", lat, lng);
    };

    return (
        <div className="home-container">
            <Header />
            <div className="deal-row">
                <h1 className="title-row">Exclusive Deals</h1>
                <Slider {...settings}>
                    <Card
                        title="Limited Time Offer"
                        images={[diapers]}
                        text="Special discount"
                        isCarousel={false}
                        price="$15.99"
                        originalPrice="$19.99"
                        name="Huggies Diapers"
                        onClick={() => handleCardClick({ title: "Huggies Diapers", images: [diapers], price: "$15.99", originalPrice: "$19.99", description: "Special discount on bulk purchase.", url:"https://www.walmart.com" })}
                    />
                    <Card
                        title="Discounts"
                        images={[margarine]}
                        text="2 for 1 Sale"
                        isCarousel={false}
                        price="$5.99"
                        originalPrice="$11.98"
                        name="Margarine Tub"
                        onClick={() => handleCardClick({ title: "Margarine Tub", images: [margarine], price: "$5.99", originalPrice: "$11.98", description: "Buy one get one free offer.", url:"https://www.walmart.com" })}
                    />
                    <Card
                        title="Clearances"
                        images={[phone]}
                        text="Clearance Sale"
                        isCarousel={false}
                        price="$299.99"
                        originalPrice="$499.99"
                        name="Samsung S8+ Phone"
                        onClick={() => handleCardClick({ title: "Samsung S8+ Phone", images: [phone], price: "$299.99", originalPrice: "$499.99", description: "Clearance sale, while stocks last.", url:"https://www.walmart.com" })}
                    />
                </Slider>
            </div>
            <div className="cat-row">
                <h1 className="title-row">Categories</h1>
                <Slider {...settings}>
                    <Card
                        title="Clothing"
                        images={[redDress]}
                        name="Red Evening Dress"
                        price="$89.99"
                        originalPrice="$129.99"
                        onClick={() => handleCardClick({ title: "Red Evening Dress", images: [redDress], price: "$89.99", originalPrice: "$129.99", description: "Stylish evening wear.", url:"https://www.walmart.com" })}
                    />
                    <Card
                        title="Groceries"
                        images={[milk]}
                        name="Organic Milk"
                        price="$2.49"
                        originalPrice="$2.99"
                        onClick={() => handleCardClick({ title: "Organic Milk", images: [milk], price: "$2.49", originalPrice: "$2.99", description: "Fresh organic milk.", url:"https://west.iga.ca/" })}
                    />
                    <Card
                        title="Electronics"
                        images={[macbook]}
                        name="Macbook Pro 13 inch"
                        price="$1199.99"
                        originalPrice="$1399.99"
                        onClick={() => handleCardClick({ title: "Macbook Pro 13 inch", images: [macbook], price: "$1199.99", originalPrice: "$1399.99", description: "Latest model with M2 chip.", url:"https://www.walmart.com" })}
                    />
                    <Card
                        title="Cosmetics"
                        images={[lipstick]}
                        name="Super Lustrous Lipstick"
                        price="$7.99"
                        originalPrice="$9.99"
                        onClick={() => handleCardClick({ title: "Super Lustrous Lipstick", images: [lipstick], price: "$7.99", originalPrice: "$9.99", description: "Rich color, smooth application.", url:"https://www.walmart.com" })}
                    />
                    <Card
                        title="Fresh Produce"
                        images={[oranges]}
                        name="Fresh Oranges"
                        price="$4.49"
                        originalPrice="$4.99"
                        onClick={() => handleCardClick({ title: "Fresh Oranges", images: [oranges], price: "$4.49", originalPrice: "$4.99", description: "Sweet and juicy oranges.", url:"https://west.iga.ca/" })}
                    />
                </Slider>
            </div>
            <div className="prod1-row">
                <h1 className="title-row">Over 50% Off at Walmart</h1>
                <Slider {...settings}>
                    <Card
                        images={[phone]}
                        text="Clearance Price"
                        price="$299.99"
                        originalPrice="$599.99"
                        name="Samsung Galaxy S9"
                        onClick={() => handleCardClick({ title: "Samsung Galaxy S9", images: [phone], price: "$299.99", originalPrice: "$599.99", description: "Special clearance event pricing.", url:"https://www.walmart.com" })}
                    />
                    <Card
                        images={[dogfood]}
                        text="Massive Discount"
                        price="$19.99"
                        originalPrice="$39.99"
                        name="Premium Dog Food"
                        onClick={() => handleCardClick({ title: "Premium Dog Food", images: [dogfood], price: "$19.99", originalPrice: "$39.99", description: "20 lbs bag of premium dog food.", url:"https://www.walmart.com" })}
                    />
                    <Card
                        images={[limes]}
                        text="Weekly Special"
                        price="$0.99"
                        originalPrice="$1.99"
                        name="Organic Limes"
                        onClick={() => handleCardClick({ title: "Organic Limes", images: [limes], price: "$0.99", originalPrice: "$1.99", description: "Fresh organic limes on sale.", url:"https://www.walmart.com" })}
                    />
                    <Card
                        images={[macbook]}
                        text="Special Offer"
                        price="$999.99"
                        originalPrice="$1299.99"
                        name="Macbook Air"
                        onClick={() => handleCardClick({ title: "Macbook Air", images: [macbook], price: "$999.99", originalPrice: "$1299.99", description: "Lightweight, powerful and affordable.", url:"https://www.walmart.com" })}
                    />
                </Slider>
            </div>
            <div className="prod2-row">
                <h1 className="title-row">Over 30% Off at IGA</h1>
                <Slider {...settings}>
                    <Card
                        images={[broccoli]}
                        text="Fresh Offer"
                        price="$0.99"
                        originalPrice="$1.49"
                        name="Fresh Broccoli"
                        onClick={() => handleCardClick({ title: "Fresh Broccoli", images: [broccoli], price: "$0.99", originalPrice: "$1.49", description: "Organically grown fresh broccoli.", url:"https://west.iga.ca/" })}
                    />
                    <Card
                        images={[ketchup]}
                        text="Discount Deal"
                        price="$2.99"
                        originalPrice="$3.99"
                        name="Heinz Ketchup"
                        onClick={() => handleCardClick({ title: "Heinz Ketchup", images: [ketchup], price: "$2.99", originalPrice: "$3.99", description: "Classic Heinz ketchup.", url:"https://west.iga.ca/" })}
                    />
                    <Card
                        images={[margarine]}
                        text="Save Now"
                        price="$1.99"
                        originalPrice="$2.99"
                        name="Butter Substitute"
                        onClick={() => handleCardClick({ title: "Butter Substitute", images: [margarine], price: "$1.99", originalPrice: "$2.99", description: "Healthy margarine alternative.", url:"https://west.iga.ca/" })}
                    />
                </Slider>
            </div>

            <GoogleMapComponent onLocationSelect={handleLocationSelect} />
            <div className="footer">
                <p>Copyright © 2024 DiscountFinder. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Home;