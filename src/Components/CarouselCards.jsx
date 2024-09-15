import React, { useEffect, useState } from 'react';
import '../Components/Styles/CarouselCards.css';
import data from './Data/data';

const CarouselCards = () => {
  const [translateX, setTranslateX] = useState(0);
  const [isEven, setIsEven] = useState(true);


  

  useEffect(() => {
    const intervalId = setInterval(toggleClassNames, 6000); // Change every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX((prevX) => (prevX <= -1000 ? 0 : prevX - 100)); // Move left continuously
    }, 6000); // Speed should match the bounce timing

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
// Function to toggle class names
const toggleClassNames = () => {
  setIsEven(prev => !prev);
};
  return (
    <div className="carousel-wrapper">
      <div className="carousel-container" style={{ transform: `translateX(${translateX}px)` }}>
        {data.map((i, index) => (
          <div
            className={`item ${isEven ? (index % 2 === 0 ? 'even' : 'odd') : (index % 2 === 0 ? 'odd' : 'even')}`}
            key={index}

          >
            <img src={i.image} alt="/" />
            <h3> {i.username}</h3>
            <p>{i.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselCards;
