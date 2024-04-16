import React from 'react';
import Slider from "react-slick";
import './Card.css';

const Card = ({ title, images, text, isCarousel }) => {
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
        <div className="card">
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
            </div>
        </div>
    );
};

export default Card;
