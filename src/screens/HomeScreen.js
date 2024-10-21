import React, { memo, useMemo } from 'react';
import Slider from '../components/homepage/Slider';
import HomeServices from '../components/homepage/HomeServices';
import { servicesImages, sliderImages } from '../data';
import HomeReviews from '../components/homepage/HomeReviews';
import VideoPlayer from '../components/homepage/VideoPlayer';
import AboutUs from '../components/homepage/AboutUs';
import ContactJumbo from '../components/reusable/ContactJumbo';

const HomeScreen = memo(() => {
  const sliderData = useMemo(() => sliderImages, []);
  const servicesData = useMemo(() => servicesImages, []);

  return (
    <div>
      <Slider images={sliderData} />
      <HomeServices images={servicesData} />
      <AboutUs />
      <HomeReviews /> 
      <VideoPlayer />
      <ContactJumbo />
    </div>
  );
});

export default HomeScreen;
