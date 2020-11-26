import React from 'react';
import Slider from '../components/Slider';
import HomeServices from '../components/HomeServices';
import { images, sliderImages } from '../homeimages';
import HomeReviews from '../components/HomeReviews';

const HomeScreen = () => {
  return (
    <div>
      <Slider images={sliderImages} />
      <HomeServices images={images} />
      {/* <HomeReviews images={images} /> */}
    </div>
  );
};

export default HomeScreen;
