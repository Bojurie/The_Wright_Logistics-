import React from 'react';
import './HeaderNavbar.css';

import Logo from '../Logo-2.png'
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

const HeaderNavbar = () => { 
    return (
      <div className='Header'>
        <div className='container'>
          <nav className='Navbar'> 
            <div className='logo'>
              <img src={Logo} width="160" alt='Logo'/>
            </div>
            {/* <ul className='Navbar-links'>
              <li onClick={() => props.isMobile && props.closeMobileMenu()}><Link to='/'>Home</Link></li>
              <li onClick={() => props.isMobile && props.closeMobileMenu()}><Link to='/service'>Service</Link></li>
              <li onClick={() => props.isMobile && props.closeMobileMenu()}><Link to='/loardboad'>Load Board</Link></li>
              <li onClick={() => props.isMobile && props.closeMobileMenu()}><Link to='/about'>About</Link></li> */}
             
              {/* <li><Link to='/login'>LogIn</Link></li>
              <li><Link to='/register'>Sign-Up</Link></li> */}
              {/* <li onClick={() => props.isMobile && props.closeMobileMenu()} className='contact-link'><Link to='/contact'>Contact</Link></li>
            </ul> */}
            <Navigation />
            <MobileNavigation />
          </nav>
         </div>
         
      </div>
    )
  }

export default HeaderNavbar;