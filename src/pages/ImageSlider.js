import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Import your CSS file for styling

const ImageSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const images = [
    "images.jpeg",
    "images1.jpeg",
    "images2.jpeg",
    "images3.jpeg",
        // Add more image paths as needed
  ];

  return (
    <div className="image-slider-container">
      <div className="image-slider" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
