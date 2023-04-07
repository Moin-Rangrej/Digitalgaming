import React from 'react'
import Facebook from '../img/facebook.jpg'
import Twitter from '../img/twitter.jpg'
import Instagram from '../img/instagram.jpg'
import Mail from '../img/mail.jpg'
import Linkedin from '../img/linkedin.jpg'
import { motion,useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import '../css/Stylefooter.css'

const Footer = () => {

    const {ref,inView} = useInView({
        threshold: 0.2
      })
      
      const aboutus = useAnimation()
      const privacypolicy = useAnimation()
      const TOS = useAnimation()

    //   cosialMediaIcons
      const facebook = useAnimation()
      const twitter = useAnimation()
      const instagram = useAnimation()
      const email = useAnimation()
      const linkedin = useAnimation()

      useEffect(() => {
        console.log('from career page' , inView); 
  
        if (inView) {
          aboutus.start({
            opacity: 1,
            x:0,
            transition:{
              type: 'spring',
              delay: 1,
              duration: 1,
              stiffness: 50
            }
          })
          privacypolicy.start({
            opacity:1,
            y: 0,
            transition:{
              type:'spring',
              delay: 1,
              duration: 1,
              stiffness: 50
            }
          })
          TOS.start({
            opacity: 1,
            x: 0,
            transition:{
              type:'spring',
               delay:1,
               duration: 1,
               stiffness: 50
            }
          })
          facebook.start({
            opacity: 1,
            transition:{
               delay:1,
               duration: 1 
            }
          })
          twitter.start({
            opacity: 1,
            transition:{
               delay:1.2,
               duration: 1 
            }
          })
          instagram.start({
            opacity: 1,
            transition:{
               delay:1.4,
               duration: 1 
            }
          })
          email.start({
            opacity: 1,
            transition:{
               delay:1.6,
               duration: 1 
            }
          })
          linkedin.start({
            opacity: 1,
            transition:{
               delay:1.8,
               duration: 1 
            }
          })

        }
  
        if (!inView) {
          aboutus.start({
            opacity: 0,
            x: -500
          })
          privacypolicy.start({
            opacity: 0,
            y: -500
          })
          TOS.start({
            opacity: 0,
            x: 500
          })
          facebook.start({
            opacity: 0
          })
          twitter.start({
            opacity: 0
          })
          instagram.start({
            opacity: 0
          })
          email.start({
            opacity: 0
          })
          linkedin.start({
            opacity: 0
          })
        }
  
    },[inView])

  return (
    <>
        <div className='footerSize container'>
            <div className='row'>
                
                <div className='col-12' ref={ref}>
                    <div className='footerPages'>
                        <motion.p animate={aboutus}>About Us</motion.p>
                        <motion.p animate={privacypolicy}>Privacy Policy</motion.p>
                        <motion.p animate={TOS}>TOS</motion.p>
                    </div>
                    <div className='footerIcons'>
                        <motion.img src={Facebook} alt="Facebook Logo" animate={facebook}/>
                        <motion.img src={Twitter} alt="Twitter Logo" animate={twitter}/>
                        <motion.img src={Instagram} alt="Instagram Logo" animate={instagram}/>
                        <motion.img src={Mail} alt="Mail Logo" animate={email}/>
                        <motion.img src={Linkedin} alt="Linkedin Logo" animate={linkedin}/>
                    </div>
                    <p className='copyRight'>
                    © 2022 Digital Katha. All Rights Reserved
                    </p>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Footer
