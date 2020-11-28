import React from 'react';
import Jumbo from '../components/reusable/Jumbo';

const ServiceScreen = () => {
  const info = {
    title: 'Services',
    subTitle: 'Deisgn, Build, Remodel. That is our moto.',
  };
  return (
    <>
      <Jumbo info={info} />;
    </>
  );
};

export default ServiceScreen;
