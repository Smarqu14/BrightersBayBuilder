import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  return (
    <div className='video__player'>
      <div className='section__title'>
        <h1>Demostraction Video</h1>
        <h4>Timelapse of our last project</h4>
      </div>
      <ReactPlayer
        controls
        url='https://youtu.be/yzpcyGJ2wD0'
        width='80%'
        height='500px'
      />
    </div>
  );
};

export default VideoPlayer;
