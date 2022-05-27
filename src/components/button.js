import React from 'react'

const Button = ({ className, callback, icon }) => {
  if (icon) {
    return (
      // eslint-disable-next-line
      <a onClick={callback} className={`${className} button`}> 
        <i className={icon} />
      </a>
    );
  }
}
export default Button