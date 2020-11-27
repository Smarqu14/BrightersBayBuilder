import React from 'react';
import Jumbo from '../components/Jumbo';

const ProjectScreen = () => {
  const info = {
    title: 'Projects',
    subTitle: 'We can build anything for you.',
  };
  return (
    <>
      <Jumbo info={info} />;
    </>
  );
};

export default ProjectScreen;
