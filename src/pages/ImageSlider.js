import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Import your CSS file for styling

const ImageSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 2000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const images = [
    "AD1.png",
    "AD2.png",
    "AD3.png",
    "AD4.png",
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
