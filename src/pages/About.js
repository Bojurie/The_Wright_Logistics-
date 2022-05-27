import React, { Component } from 'react'
import Header from './Header';
import ReactPlayer from 'react-player'

import './About.css'
import FillerSection from '../components/FillerSection';
import Clients from '../components/Clients';

class About extends Component {
  render() {
    return (
      <div>
        <Header title='About' />
        <div className='container'>
          <div className='video-responsive'>
            <div className=''>
                <ReactPlayer url='https://youtu.be/3_-YVqrnUGE' className='video' playing='true'/>
                
            </div>
          </div>
          <div className='home_about-content'>
            <h3>About Company</h3>
            <h1>Know About Our Company</h1>
            <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis enum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat actor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentm fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquamassa nisl quis neque. Suspendisse in orci enim.</p>
          </div>

        </div>
        <section className='filler-section'>
           <FillerSection />
           
        </section>
        <section>
          <Clients />
        </section>
      </div>
      
    )
  }
}
export default About;