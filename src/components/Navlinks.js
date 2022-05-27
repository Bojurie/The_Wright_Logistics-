import React from 'react';
import {Link } from 'react-router-dom';
import { motion } from "framer-motion";
import './HeaderNavbar.css'


const Navlinks = (props) => {
  const animateFrom = {opacity: 0, y: -40}
  const animateTo = {opacity: 1, y: 0}
  return (
      <nav className='nav'>
          <ul className='Navbar-links'>
              <motion.li 
                  initial={animateFrom} 
                  animate={animateTo} 
                  transition={{delay: 0.05}}
                  onClick={() => props.isMobile && props.closeMobileMenu()}>
               <Link to='/'>Home</Link>
              </motion.li>
              <motion.li 
                  initial={animateFrom} 
                  animate={animateTo}
                  transition={{delay: 0.10}}
                  onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to='/service'>Service</Link>
              </motion.li>
              <motion.li 
                  initial={animateFrom} 
                  animate={animateTo}
                  transition={{delay: 0.20}}
                  onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to='/loardboad'>Load Board</Link>
              </motion.li>
              <motion.li 
                  initial={animateFrom} 
                  animate={animateTo}
                  transition={{delay: 0.30}}
                  onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to='/about'>About</Link>
              </motion.li>
             
              {/* <li><Link to='/login'>LogIn</Link></li>
              <li><Link to='/register'>Sign-Up</Link></li> */}
              <motion.li 
                  initial={animateFrom} 
                  animate={animateTo}
                  transition={{delay: 0.40}}
                  onClick={() => props.isMobile && props.closeMobileMenu()} className='contact-link'>
                <Link to='/contact'>Contact</Link>
              </motion.li>
            </ul>
       </nav>

  );
}

export default Navlinks;
