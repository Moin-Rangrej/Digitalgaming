import React from 'react'

const Contactus = () => {
  return (
    <>
        <div className='contactbg'>
            <h1 className='contactHeading'>Contact Us</h1>
            <p className='contactPara'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            </p>
            <div className='contactForm'>
            <section className='userName'>
                <input type='text' placeholder='First Name' className='firstName'/>
                <input type='text' placeholder='Last Name' className='lastName'/>
            </section>
            <section className='userphoneEmail'>
                <input type='text' placeholder='Phone' className='firstName'/>
                <input type='text' placeholder='Email' className='lastName'/>
            </section>
            <section className='userMessage'>
                <textarea placeholder='Message' className='message'/>
            </section>
            <button className='sendMessage'>Send Message</button>
            </div>
        </div>
    </>
  )
}

export default Contactus