import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';

const Slider = ({ images }) => {
  return (
    <div className='slider__container'>
      <AliceCarousel
        infinite
        autoPlay={true}
        playButtonEnabled={true}
        autoPlayActionDisabled={true}
        fadeOutAnimation={true}
        autoPlayInterval={2000}
        autoPlayDirection='rtl'
        mouseTrackingEnabled={true}
        disableAutoPlayOnAction={true}
        autoPlayControls={false}
      >
        {images.map((img) => {
          return (
            <div key={img.title}>
              <img src={img.src} className='slider__img' alt={img.title} />
              <div className='slider__text'>
                <div className='slider__title'>{img.title}</div>
                <Link to='/projects'>
                  <button className='slider__btn slider__btn-effect'>
                    View Projects
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </AliceCarousel>
    </div>
  );
};

export default Slider;
