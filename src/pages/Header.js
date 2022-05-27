import React from 'react'
import './header.css'

const Header = (props) => {
  return (
    <div className='header bgImage'>
      <h2>{props.title}</h2>
    </div>
  )
}

export default Header
