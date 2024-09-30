import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';
import '../css/Slider.css';

const Slider = React.memo(({ images }) => {
  const renderSlide = ({ src, title }) => (
    <div key={title} className='slider__item'>
      <img src={src} className='slider__img' alt={title} />
      <div className='slider__text'>
        <div className='slider__title'>{title}</div>
        <Link to='/projects'>
          <button className='slider__btn slider__btn-effect'>
            View Projects
          </button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className='slider__container'>
      <AliceCarousel
        infinite
        autoPlay
        autoPlayInterval={2500}
        autoPlayDirection='rtl'
        mouseTracking
        disableAutoPlayOnAction
        autoPlayControls={false}
        fadeOutAnimation
      >
        {images.map(renderSlide)}
      </AliceCarousel>
    </div>
  );
});

export default Slider;
