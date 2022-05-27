import React from 'react';
import './FillerSection.css'
import smallTruck from './Images/smallmidsec.png'

const FillerSection = () => {
  return (
    <div className='filler-section'>
        <div className='bg-image'>
          <div className='container filler-items'>
              <h1>WE OFFER QUICE &
                POWEFULL SOLUTIONS</h1>
              <img src={smallTruck} alt='' />
          </div>
          
        </div>
    </div>
  )
}
export default FillerSection;