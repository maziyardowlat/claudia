import React from 'react';
import "./home.css";
import vid1 from '../assets/vid1.mp4';

const HomePage = () => {
  return (
    <VideoSection />
  )
}

function VideoSection(){
  return (
    <div className='video-container'>
        <video src={vid1} autoPlay loop muted style={{width: '100%',height: '100vh'}} />
        <h1>Claudia</h1>
        <p>2023</p>
       

    </div>
  )
}

export default HomePage;
