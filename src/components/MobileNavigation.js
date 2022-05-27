import React, {useState} from 'react';
import {CgMenuRound} from 'react-icons/cg' 
import {CgCloseO} from 'react-icons/cg' 
import Navlinks from './Navlinks';


const MobileNavigation = () => {
  const [open, setOpen] = useState(false)

  const hamburgerIcon = <CgMenuRound 
        className='Hamburger' 
        size="40px" color='white' 
        onClick={() => setOpen(!open)}/>

   const closeIcon = <CgCloseO
        className='Hamburger' 
        size="40px" color='white' 
        onClick={() => setOpen(!open)}/>

  const closeMobileMenu = () => setOpen(false)

  return (
    <nav className='MobileNavigation'>
      {open ? closeIcon : hamburgerIcon}
      {open && <Navlinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
}

export default MobileNavigation;
