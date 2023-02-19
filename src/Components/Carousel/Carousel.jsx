import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import girl from "../../Assets/girl-carousel.jpg"
import men1 from "../../Assets/Quality.jpg"
import men2 from "../../Assets/mens-carousel.jpg"

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={girl}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={men1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={men2}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

// render(<ControlledCarousel />
// );



{/* <img src='https://source.unsplash.com/2600x1000/?cloths,fashion' alt='Fashion with Quick-Kart' /> */}
