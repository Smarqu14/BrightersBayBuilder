import React from 'react';
import Jumbo from '../components/reusable/Jumbo';
import Contact from '../components/contactpage/Contact';
import ContactJumbo from '../components/reusable/ContactJumbo';

const ContactScreen = React.memo(() => {
  const info = React.useMemo(
    () => ({
      title: 'Contact Us',
      subTitle: 'Feel free to email or call us. We are here for YOU.',
    }),
    []
  );

  return (
    <>
      <Jumbo info={info} />
      <Contact />
      <ContactJumbo />
    </>
  );
});

export default ContactScreen;
