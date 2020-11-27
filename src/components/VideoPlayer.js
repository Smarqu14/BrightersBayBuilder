import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  return (
    <div className='video__player'>
      <h1>This is how we work</h1>
      <ReactPlayer controls url='https://youtu.be/yzpcyGJ2wD0' />
    </div>
  );
};

export default VideoPlayer;
