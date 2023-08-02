import React, { useState } from 'react';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <button onClick={goToPreviousSlide}>Назад</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <button onClick={goToNextSlide}>Далее</button>
    </div>
  );
};

const PhotoSlider = () => {
  const images = [
    'https://m.media-amazon.com/images/I/71-I1pj+7KL._AC_UF894,1000_QL80_.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/1/1b/Tuned_Toyota_Mark_II.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-lscwu4y987ObueMjznOhx042pvcj0AMI1w&usqp=CAU/',
    'https://www.carscoops.com/wp-content/uploads/2016/07/BMW-M5.jpg',
  ];

  return (
    <div>
      <h2>What i want</h2>
      <Slider images={images} />
    </div>
  );
};

export default PhotoSlider;
