import React from 'react'
import { FormTitle } from '../components/formTitle';
import Header from './Header';
import './Loadboard.css'

const LoadBoard = () => {
  return (
    <div>
      <Header title='Load Board'/>
      <div className="container">
        <FormTitle className="sign-in-form__title" text="Load-Board" />
          <div className="loadboard">
              <h1>Coming Soon</h1>
          </div>
      </div>
    </div>
  )
}

export default LoadBoard;
