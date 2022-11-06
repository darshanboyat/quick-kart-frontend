import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

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
          src="https://source.unsplash.com/2600x1000/?clothe,coat"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/2600x1000/?shirt,jacket"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/2600x1000/?jeans,hoodies"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

// render(<ControlledCarousel />
// );



{/* <img src='https://source.unsplash.com/2600x1000/?cloths,fashion' alt='Fashion with Quick-Kart' /> */}
