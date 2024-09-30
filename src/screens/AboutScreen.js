import React from 'react';
import Jumbo from '../components/reusable/Jumbo';
import About from '../components/aboutpage/About';
import ContactJumbo from '../components/reusable/ContactJumbo';

const AboutScreen = React.memo(() => {
  const info = React.useMemo(
    () => ({
      title: 'Our Story',
      subTitle: 'This is how we started',
    }),
    []
  );

  return (
    <>
      <Jumbo info={info} />
      <About />
      <ContactJumbo />
    </>
  );
});

export default AboutScreen;
