import React from "react";
import ReactPlayer from 'react-player';
import '../components/video.css';

const VideoEmbed = () => {
  return (
    <div className='video'>
      <ReactPlayer width='100%' height='580px' controls url='./Images/aboutus.mp4' />
    </div>
  );
}

export default VideoEmbed;