import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import * as actions from '../../actions';
import Header from '../../pages/Header';
import LoginForm from "./LogInForm";

import './Login.css'
class Login extends Component {

    // componentDidMount(){
    //     this.props.updateHeader('Welcome to Load Board!','Please login to continue', false);
    // }

    onSubmit = (fields) => {
        this.props.signIn(fields, () => {
            this.props.history.push('/dashboard');
        })
    }

    render() {
        return (
          <div>
          <Header title='Log In'/>
            <div className='container'>
              <div className='sign-in'>
                <LoginForm onSubmit={(event) => this.onSubmit(event)}/>
              </div>
            </div>
            
          </div>
        )
    }
}

export default connect(null, actions)(Login);