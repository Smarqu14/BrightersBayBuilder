import React from 'react';
import Jumbo from '../components/Jumbo';

const AboutScreen = () => {
  const info = {
    title: 'Our Story',
    subTitle: 'This is how we started',
  };
  return (
    <>
      <Jumbo info={info} />
    </>
  );
};

export default AboutScreen;
