import React from 'react';

const InfoList = ({ service }) => {
  const list = service.informationList.map((item) => {
    return <li>{item}</li>;
  });
  return <ul>{list}</ul>;
};
export default InfoList;
