import React from 'react';
import Jumbo from '../components/reusable/Jumbo';
import Contact from '../components/contactpage/Contact';

const ContactScreen = () => {
  const info = {
    title: 'Contact Us',
    subTitle: 'Feel free to email or call us. We are here for YOU.',
  };
  return (
    <>
      <Jumbo info={info} />
      <Contact />
    </>
  );
};

export default ContactScreen;
