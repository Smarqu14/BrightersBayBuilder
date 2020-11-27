import React from 'react';
import Jumbo from '../components/Jumbo';

const ContactScreen = () => {
  const info = {
    title: 'Contact Us',
    subTitle: 'Feel free to email or call us. We are here for YOU.',
  };
  return (
    <>
      <Jumbo info={info} />
    </>
  );
};

export default ContactScreen;
