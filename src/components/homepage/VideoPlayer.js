import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  return (
    <div className='video__player'>
      <div className='section__title'>
        <h1>Demostraction Video</h1>
        <h4>We deliver customer satisfaction</h4>
      </div>
      <ReactPlayer
        controls
        url='https://www.youtube.com/watch?v=EUvVeAvoS8k&feature=youtu.be'
        width='80%'
        height='400px'
      />
    </div>
  );
};

export default VideoPlayer;
