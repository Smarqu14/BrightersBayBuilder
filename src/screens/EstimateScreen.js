import React from 'react';
import Jumbo from '../components/Jumbo';

const EstimateScreen = () => {
  const info = {
    title: 'Estimate',
    subTitle: 'Get your estimate in minutes',
  };
  return (
    <>
      <Jumbo info={info} />;
    </>
  );
};

export default EstimateScreen;
