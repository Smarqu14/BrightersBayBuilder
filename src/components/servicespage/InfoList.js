import React from 'react';

const InfoList = ({ service }) => {
  const list = service.informationList.map((item, idx) => {
    return <li key={idx}>{item}</li>;
  });
  return <ul className="service__quality-list">{list}</ul>;
};
export default InfoList;
