import React from 'react';
import Jumbo from '../components/reusable/Jumbo';
import Services from '../components/servicespage/Services';
import { services } from '../data';

const ServiceScreen = () => {
  const info = {
    title: 'Services',
    subTitle: 'Deisgn, Build, Remodel. That is our moto.',
  };
  return (
    <>
      <Jumbo info={info} />
      <Services services={services} />
    </>
  );
};

export default ServiceScreen;
