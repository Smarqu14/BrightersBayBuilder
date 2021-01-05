import React from 'react';
import Slider from '../components/homepage/Slider';
import HomeServices from '../components/homepage/HomeServices';
import { images, sliderImages } from '../data';
import HomeReviews from '../components/homepage/HomeReviews';
import VideoPlayer from '../components/homepage/VideoPlayer';

// const importSliderImages = (r) => {
//   return r.keys().map(r);
// };

// const allImages = importSliderImages(
//   require.context('../images/slider', false, /\.(png|jpe?g|svg)$/)
// );

// const mages = [
//   {
//     src: '',
//     title: 'Home Renovation',
//   },
//   {
//     src: '',
//     title: 'Bathroom Renovation',
//   },
//   {
//     src: '',
//     title: 'Kitchen Renovation',
//   },
//   {
//     src: '',
//     title: 'New Construction',
//   },
// ];

// const sup = () => {
//   for (let i = 0; i < allImages.length; i++) {
//     for (let j = 0; j < mages.length; j++) {
//       mages[j].src = allImages[i].default;
//     }
//   }
// };

// sup();

// console.log(sliderImages);
const HomeScreen = () => {
  return (
    <div>
      <Slider images={sliderImages} />
      {/* <HomeServices images={images} /> */}
      {/* <HomeReviews images={images} /> */}
      {/* <VideoPlayer /> */}
    </div>
  );
};

export default HomeScreen;
