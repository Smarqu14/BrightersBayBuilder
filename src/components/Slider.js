import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';

const Slider = () => {
  const images = [
    {
      src: 'https://bbb-construction.s3-us-west-1.amazonaws.com/1.jpeg',
      title: 'Home Renovation',
    },
    {
      src: 'https://bbb-construction.s3-us-west-1.amazonaws.com/2.jpeg',
      title: 'Bathroom Renovation',
    },
    {
      src: 'https://bbb-construction.s3-us-west-1.amazonaws.com/3.jpeg',
      title: 'Kitchen Renovation',
    },
    {
      src: 'https://bbb-construction.s3-us-west-1.amazonaws.com/4.jpeg',
      title: 'New Construction',
    },
  ];
  return (
    <div className='slider__container'>
      <AliceCarousel
        infinite
        autoPlay={true}
        playButtonEnabled={true}
        autoPlayActionDisabled={true}
        fadeOutAnimation={true}
        autoPlayInterval={3000}
        autoPlayDirection='rtl'
        mouseTrackingEnabled={true}
        disableAutoPlayOnAction={true}
      >
        {images.map((img) => {
          return (
            <div>
              <img src={img.src} className='slider__img' alt='' />
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
