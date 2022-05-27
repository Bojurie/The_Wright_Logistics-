import React from 'react';
import { Fragment } from 'react';
import './Mapembeded.css'

const googleMap = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12670180.708920693!2d-106.94192785717361!3d39.167767442845424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sus!4v1647099903046!5m2!1sen!2sus'

const Mapembeded = () => {
  return (
    <Fragment>
      <div>
        <iframe title='Map' className='googmap' src={googleMap} allowfullscreen="" loading="lazy"/>
      </div>
    
     
    </Fragment>
   
  );
}
 
export default Mapembeded;
