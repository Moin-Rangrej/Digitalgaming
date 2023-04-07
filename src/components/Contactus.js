import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { Typewriter } from 'react-typewriting-effect'
import { useEffect } from 'react'
import '../css/Stylecontactus.css'

const Contactus = () => {

    const { ref, inView } = useInView({
        threshold: 0.2
    })

    const firstName = useAnimation()
    const lastName = useAnimation()
    const phone = useAnimation()
    const email = useAnimation()
    const message = useAnimation()
    const sendMessage = useAnimation()

    useEffect(() => {
        firstName.start({
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                delay: 1,
                duration: 1,
                stiffness: 40
            }
        })
        lastName.start({
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                delay: 1,
                duration: 1,
                stiffness: 40
            }
        })
        phone.start({
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                delay: 2,
                duration: 1,
                stiffness: 40
            }
        })
        email.start({
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                delay: 2,
                duration: 1,
                stiffness: 40
            }
        })
        message.start({
            opacity: 1,
            transition: {
                type: 'spring',
                delay: 3,
                duration: 1,
                stiffness: 40
            }
        })
        sendMessage.start({
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                delay: 4,
                duration: 1,
                stiffness: 40
            }
        })


        if (!inView) {
            firstName.start({
                opacity: 0,
                x: -500
            })
            lastName.start({
                opacity: 0,
                x: 500
            })
            phone.start({
                opacity: 0,
                x: -500
            })
            email.start({
                opacity: 0,
                x: 500
            })
            message.start({
                opacity: 0
            })
            sendMessage.start({
                opacity: 0,
                y: 200
            })
        }

    }, [inView])

    return (
        <>
            <div className='contactbg' id='contact' ref={ref}>
                <h1 className='contactHeading'>Contact Us</h1>
                <p className='contactPara'>
                    {inView && (
                        <Typewriter
                        string='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
                        cursor='|'
                        delay={40}
                        stopBlinkinOnComplete
                    />
                    )}
                </p>
                <div className='contactForm'>
                    <div className='userName'>
                        <motion.input type='text' placeholder='First Name' className='firstName' animate={firstName} />
                        <motion.input type='text' placeholder='Last Name' className='lastName' animate={lastName} />
                    </div>
                    <div className='userphoneEmail'>
                        <motion.input type='text' placeholder='Phone' className='firstName' animate={phone} />
                        <motion.input type='text' placeholder='Email' className='lastName' animate={email} />
                    </div>
                    <div className='userMessage'>
                        <motion.textarea placeholder='Message' className='message' animate={message} />
                    </div>
                    <motion.button className='sendMessage' animate={sendMessage}
                        whileHover={{
                            scale: 1.2,
                            // textShadow:
                            color: 'white', 
                            boxShadow: '0px 0px 10px white'
                        }}
                    >Send Message</motion.button>
                </div>
            </div>
        </>
    )
}

export default Contactus