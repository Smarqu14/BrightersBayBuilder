import React, { memo, useMemo } from 'react';
import Jumbo from '../components/reusable/Jumbo';
import Lead from '../components/leadpage/Lead';
import ContactJumbo from '../components/reusable/ContactJumbo';

const LeadScreen = memo(() => {
  const info = useMemo(
    () => ({
      title: 'Lead Based Paint',
      subTitle: 'Protecting Families from Lead Hazards',
    }),
    []
  );

  return (
    <>
      <Jumbo info={info} />
      <Lead />
      <ContactJumbo />
    </>
  );
});

export default LeadScreen;
