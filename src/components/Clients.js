import React from 'react';

import image6 from './Images/image 6.png';
import image7 from './Images/image 7.png';
import image8 from './Images/image 8.png';
import image9 from './Images/image 9.png';

import './clients.css';

const Clients = () => {

  return (
    <div className='homeClient'>
      <div className='container'> 
      <div className='clients-content'>
          <div className='clients-content_heading'>
            <h3>Our Clients</h3>
            <h1>OUR AWESOME PARTNERS</h1>
          </div>
          <div className='clients-logo'>
            <img src={image6} alt=''/>
            <img src={image7} alt=''/>
            <img src={image8} alt=''/>
            <img src={image9} alt=''/>

          </div>
      </div>
      </div>
    </div>
  )
}
export default Clients;