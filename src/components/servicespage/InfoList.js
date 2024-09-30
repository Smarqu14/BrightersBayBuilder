import React from 'react';

const InfoList = React.memo(({ service }) => {
  return (
    <ul className='service__quality-list'>
      {service.informationList.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
});

export default InfoList;
