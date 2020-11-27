import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  return (
    <div className='video__player'>
      <div className='section__title'>
        <h1>Remodeling</h1>
        <p>Timelapse of our last project</p>
      </div>
      <ReactPlayer controls url='https://youtu.be/yzpcyGJ2wD0' />
    </div>
  );
};

export default VideoPlayer;
