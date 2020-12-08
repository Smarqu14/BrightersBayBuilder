import React from 'react';
import Slider from '../components/homepage/Slider';
import HomeServices from '../components/homepage/HomeServices';
import { images, sliderImages } from '../data';
import HomeReviews from '../components/homepage/HomeReviews';
import VideoPlayer from '../components/homepage/VideoPlayer';

const HomeScreen = () => {
  return (
    <div>
      <Slider images={sliderImages} />
      <HomeServices images={images} />
      <HomeReviews images={images} />
      {/* <VideoPlayer /> */}
    </div>
  );
};

export default HomeScreen;
