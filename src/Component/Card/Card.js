import React from 'react';
import './Card.css';
import Slider from "react-slick";

const Card = ({ title, images, text, isCarousel, price, name, onClick, originalPrice }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="card" onClick={() => onClick({ title, images, price, name, text })}>
            <h3 className="card-title">{title}</h3>
            {isCarousel && images.length > 0 ? (
                <Slider {...settings}>
                    {images.map((img, index) => (
                        <div key={index} className="slider-image-container">
                            <img src={img} alt={`${title} ${index + 1}`} className="card-image" />
                        </div>
                    ))}
                </Slider>
            ) : (
                images && <img src={images[0]} alt={title} className="card-image" />
            )}
            <div className="card-content">
                {text && <p className="card-text">{text}</p>}
                <p className="card-name">{name}</p>
                {originalPrice ? (
                    <p className="card-price">
                        <span className="original-price">{originalPrice}</span> {price}
                    </p>
                ) : (
                    <p className="card-price">{price}</p>
                )}
            </div>
        </div>
    );
};

export default Card;