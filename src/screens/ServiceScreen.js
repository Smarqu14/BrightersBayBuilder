import React, { memo, useMemo } from 'react';
import Jumbo from '../components/reusable/Jumbo';
import Services from '../components/servicespage/Services';
import ContactJumbo from '../components/reusable/ContactJumbo';
import { services } from '../data';

const ServiceScreen = () => {
  const info = useMemo(
    () => ({
      title: 'Services',
      subTitle: 'Design, Build, Remodel. That is our motto.',
    }),
    []
  );

  return (
    <>
      <Jumbo info={info} />
      <Services services={services} />
      <ContactJumbo />
    </>
  );
};

export default memo(ServiceScreen);
