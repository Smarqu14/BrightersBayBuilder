import React from 'react';
import ReactPlayer from 'react-player';
import '../css/VideoPlayer.css';

const VideoPlayer = () => {
  const videoUrl =
    'https://www.youtube.com/watch?v=EUvVeAvoS8k&feature=youtu.be';

  return (
    <div className='video__player'>
      <div className='section__title'>
        <h2>Demonstration Video</h2>
        <h4>We deliver customer satisfaction</h4>
      </div>
      <ReactPlayer controls url={videoUrl} width='80%' height='400px' />
    </div>
  );
};

export default React.memo(VideoPlayer);
