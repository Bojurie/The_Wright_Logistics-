import React from 'react';
import Button from 'react-bootstrap/Button';
import './HomeAbout.css'
import image from '../components/Images/Group 14.png'
import About from '../pages/About';

const HomeAbout = () => {
    const clickHandler = () => {
      return(
        <About />
      )
    }
    return (
      <div className='HomeAbout'>  
          <div className='container'>
            <div className='Homeabout-heading'>
              <h3>About Us <span>- </span></h3>
                  <h1>Who We Are</h1>
            </div>
            
            <div className='About-Content '>
              <div className='About-img About-left'>
                <img src={image} alt='' />
              </div>

              <div className='About-right'>
                  <p className='About-Para'>
                    Logistics management is the part of supply chain management that plans, implements, and controls the efficient, effective forward, and reverse flow and storage of goods, services, and related information between the point of origin and the point of consumption.

                    The complexity of logistics can be modeled, analyzed, visualized, and optimized by dedicated simulation software. The minimization of the use of resources is a common motivation in all logistics fields. 
                  </p>
                  <Button title='Learn More' variant="warning" onClick={clickHandler}>Learn More</Button>
              </div>
            </div>
          </div>
      </div>
    )
}
export default HomeAbout;