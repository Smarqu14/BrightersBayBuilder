import React from 'react';
import Jumbo from '../components/reusable/Jumbo';
import About from '../components/aboutpage/About';

const AboutScreen = () => {
  const info = {
    title: 'Our Story',
    subTitle: 'This is how we started',
  };
  return (
    <>
      <Jumbo info={info} />
      <About />
    </>
  );
};

export default AboutScreen;
