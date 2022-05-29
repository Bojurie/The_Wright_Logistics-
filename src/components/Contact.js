import React, { useState } from "react";

import './Contact.css'

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, phone, subject, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      subject: subject.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className='contact-form'>
      <div className='container'>
        <div className='contact-form-headers'>
          <h3>Contact Us</h3>
          <h1>GET IN TOUCH</h1>
        </div>
         <div className='contact-content-wrapper'>
            <form onSubmit={handleSubmit} className="main-form">
              <div className='contact-main-form'>
                <div className='form-input1'>      
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    placeholder='Enter name...' />
                </div>
                <div className='form-input1'>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    placeholder='Enter Email...'/>
                </div>
                <div className='form-input1'>
                  <input 
                    type="phone" 
                    id="phone" 
                    required 
                    placeholder='Enter Number' />
                </div>
                <div className='form-input1'>
                  <input 
                    type="subject" 
                    id="subject" 
                    required 
                    placeholder='Subject...'/>
                </div>
              </div>
              
              <div className='lower-contact'>
                <textarea id="message" required placeholder='Enter Message...'/>
                <button type="submit" className='btn  btn-outline-primary'>{status}
              </button>
              </div>
              
            </form>
            <div className='contact-form-img'>
                <img src='' alt=''/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;