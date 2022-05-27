import React from 'react';
import './HomeServices.css';
import BackgroundImage from './Images/bg.jpg'; 
import Struck from './Images/struck.png'

import money from './Images/$.png';
import headset from './Images/headset.png';
import ribbon from './Images/ribbon.png';
import discount from './Images/present.png';
import support from './Images/person.png'
import miniTruck from './Images/image 2.png'

const  HomeServices = () =>{
    return (
      <div className='home-services' style={{background: `url(${BackgroundImage})` }}>
        <div className='container'>
              <div className='service-section'>
                <div className='service-section-left'>
                    <div className='home-headings'>
                        <h3>Our Services <hr/> </h3>
                        <h1>What we offer</h1>
                    </div>

                    <div className='home-service-para'>
                      <p>
                          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
                      </p>
                    </div>
              

                  <div className='service-item1'>
                    <div className='service-items'>
                        <div className='icon-circle'>
                          <img src={money} alt='dollar sign'/>
                        </div>
                        <div className='service-item'>
                          <h2>Satisfied Cost</h2>
                          <p>Logistics management is the part of supply chain </p>
                        </div>
                    </div>
                    <div className='service-items'>
                        <div className='icon-circle'>
                          <img src={headset} alt='support'/>
                        </div>
                        <div className='service-item'>
                          <h2>Support 24X7</h2>
                          <p>Logistics management is the part of supply chain</p>
                        </div> 
                    </div>

                    <div className='service-items'>
                        <div className='icon-circle'>
                          <img src={ribbon} alt='Reward'/>
                        </div>
                        <div className='service-item'>
                          <h2>Earn Rewards</h2>
                          <p>Logistics management is the part of supply chain </p>
                        </div>
                    </div>

                    <div className='service-items'>
                        <div className='icon-circle'>
                          <img src={discount} alt='discount'/>
                        </div>
                        <div className='service-item'>
                          <h2>Trustable</h2>
                            <p>Logistics management is the part of supply chain </p>
                        </div>
                    </div>

                    <div className='service-items'>
                        <div className='icon-circle'>
                          <img src={discount} alt='discount'/>
                        </div>
                        <div className='service-item'>
                          <h2>Discount</h2>
                          <p>Logistics management is the part of supply chain </p>
                        </div>
                    </div>

                    <div className='service-items'>
                      <div className='icon-circle'>
                        <img src={support} alt='support'/>
                      </div>
                      <div className='service-item'>
                        <h2>User Friendly</h2>
                        <p>Logistics management is the part of supply chain </p>
                      </div>
                    </div>
                  </div> 
                </div>
                <div className='right-side'>
                  <div className='service-truckImg'>
                    <img src={Struck} alt='' />
                  </div>
                  <div className='miniTruck'>
                    <img src={miniTruck} alt='' />
                  </div>
                </div>
              </div>
              
              
        </div>
      </div>
    )
  }

export default HomeServices;