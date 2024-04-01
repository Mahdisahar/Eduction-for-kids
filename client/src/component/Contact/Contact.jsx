import React from 'react';
import './Contact.scss';

export default function Contact() {
  return (
    <div className='contact' id='contact'>
      <div className='contact__container'>
        <div className='contact__email'>
          <h6>Email</h6>
          <p>email@email.com</p>
        </div>

        <div className='contact__address'>
          <h6>Address</h6>
          <p>BC, Port Coquitlam</p>
        </div>

        <div className='contact__phone'>
          <h6>Phone</h6>
          <p>(604)-123-4567</p>
        </div>
      </div>
    </div>
  );
}
