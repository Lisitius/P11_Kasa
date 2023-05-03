import React, { useState } from "react";
import "./carousel.scss";

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {pictures.length > 1 && (
          <i
            className="fa-solid fa-chevron-left fa-6x carousel__arrow carousel__arrow--left"
            onClick={prevSlide}
          ></i>
        )}
        <img
          className="carousel__image"
          src={pictures[currentIndex]}
          alt="Carousel"
        />
        {pictures.length > 1 && (
          <i
            className="fa-solid fa-chevron-right fa-6x carousel__arrow carousel__arrow--right"
            onClick={nextSlide}
          ></i>
        )}
      </div>
    </div>
  );
};

export default Carousel;
