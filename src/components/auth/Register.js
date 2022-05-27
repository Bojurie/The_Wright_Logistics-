import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Header from '../../pages/Header';
import RegisterForm from './RegisterForm';

import './Register.css'

class Register extends Component {

    onSubmit = (fields) => {
        this.props.signUp(fields, () => {
            console.log('navigate to dashboard');
            this.props.history.push('/dashboard');
        })
    }

    // componentDidMount() {
    //     this.props.updateHeader('Welcome to HOA Manager!', 'Please login to continue', false);
    // }

    render() {
        return (
          <div>
            <Header title='Sign-Up'/>
            <div className='container'>
              <div className='sign-up'>
                  <RegisterForm onSubmit={(event) => this.onSubmit(event)}/>
              </div>
            </div>
          </div>
            
        )
    }
}

export default connect(null, actions)(Register);