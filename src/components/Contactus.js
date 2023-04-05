import React from 'react'

const Contactus = () => {
  return (
    <>
        <div className='contactbg' id='contact'>
            <h1 className='contactHeading'>Contact Us</h1>
            <p className='contactPara'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            </p>
            <div className='contactForm'>
            <div className='userName'>
                <input type='text' placeholder='First Name' className='firstName'/>
                <input type='text' placeholder='Last Name' className='lastName'/>
            </div>
            <div className='userphoneEmail'>
                <input type='text' placeholder='Phone' className='firstName'/>
                <input type='text' placeholder='Email' className='lastName'/>
            </div>
            <div className='userMessage'>
                <textarea placeholder='Message' className='message'/>
            </div>
            <button className='sendMessage'>Send Message</button>
            </div>
        </div>
    </>
  )
}

export default Contactus