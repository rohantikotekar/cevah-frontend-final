import React, { useState } from 'react';
import './ImageSlider1.css';

const images = [
  
  'DesktopTestimonial3.png',
  'DesktopTestimonial4.png',
];


const ImageSlider1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <button className="left-arrow" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slider-images">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            {index === currentIndex && (
              <img src={image} alt={`Slide ${index}`} />
            )}
          </div>
        ))}
      </div>
      <button className="right-arrow" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider1;
