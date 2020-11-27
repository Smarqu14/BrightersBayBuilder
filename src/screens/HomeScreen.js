import React from 'react';
import Slider from '../components/Slider';
import HomeServices from '../components/HomeServices';
import { images, sliderImages } from '../data';
import HomeReviews from '../components/HomeReviews';
import VideoPlayer from '../components/VideoPlayer';

const HomeScreen = () => {
  return (
    <div>
      <Slider images={sliderImages} />
      <HomeServices images={images} />
      <HomeReviews images={images} />
      <VideoPlayer />
    </div>
  );
};

export default HomeScreen;
