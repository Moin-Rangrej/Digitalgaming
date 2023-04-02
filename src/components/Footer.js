import React from 'react'
import Facebook from '../img/facebook.jpg'
import Twitter from '../img/twitter.jpg'
import Instagram from '../img/instagram.jpg'
import Mail from '../img/mail.jpg'
import Linkedin from '../img/linkedin.jpg'

const Footer = () => {
  return (
    <>
        <div className='footerSize container'>
            <div className='row'>
                <div className='col-3'>
                </div>
                <div className='col-6'>
                    <div className='footerPages'>
                        <p>About Us</p>
                        <p>Privacy Policy</p>
                        <p>TOS</p>
                    </div>
                    <div className='footerIcons'>
                        <img src={Facebook} alt="Facebook Logo"/>
                        <img src={Twitter} alt="Twitter Logo"/>
                        <img src={Instagram} alt="Instagram Logo"/>
                        <img src={Mail} alt="Mail Logo"/>
                        <img src={Linkedin} alt="Linkedin Logo"/>
                    </div>
                    <p className='copyRight'>
                    © 2022 Digital Katha. All Rights Reserved
                    </p>
                </div>
                <div className='col-3'></div>
            </div>
        </div> 
    </>
  )
}

export default Footer
