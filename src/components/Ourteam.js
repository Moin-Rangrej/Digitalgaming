import React from 'react'
import Member1 from '../img/member1.jpg'
import Member2 from '../img/memeber2.jpg'
import Member3 from '../img/member3.jpg'
import Member4 from '../img/member4.jpg'
import { Typewriter } from 'react-typewriting-effect'
import { motion , useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import '../css/Styleourteam.css'


const Ourteam = () => {

  const {ref,inView} = useInView({
    threshold: 0.2
  })

  const teamHeading = useAnimation()

  const member1 = useAnimation()
  const member2 = useAnimation()
  const member3 = useAnimation()
  const member4 = useAnimation()

  useEffect(() => {
      console.log('from ourTeam' , inView);
      if (inView) {
        teamHeading.start({
          opacity: 1,
          x: 0,
          transition: { type: 'spring', delay: 1, duration: 2, stiffness: 100 }
        })
        member1.start({
          opacity: 1,
          x:0,
          transition:{
            type: 'spring',
            delay: 1,
            duration: 2,
            stiffness: 50
          }
        })
        member2.start({
          opacity: 1,
          y: 0,
          transition:{
            type:'spring',
            delay:2,
            duration: 2,
            stiffness: 50
          }
        })
        member3.start({
          opacity: 1,
          y:0,
          transition:{
            type:'spring',
            delay:2,
            duration: 2,
            stiffness: 50
          }
        })
        member4.start({
          opacity: 1,
          x: 0,
          transition:{
            type:'spring',
            delay: 1,
            duration: 2,
            stiffness: 50
          }
        })
      }

      if (!inView) {
          teamHeading.start({
            opacity: 0,
            x: 1000
          })
          member1.start({
            opacity: 0,
            x: -700
          })
          member2.start({
            opacity: 0,
            y: 200
          })
          member3.start({
            opacity: 0,
            y: -200
          })
          member4.start({
            opacity: 0,
            x: 700
          })
      }
  },[inView])


  return (
    <>
      <div className='outTeambg' id='team' ref={ref}>
        <motion.h1 className='ourteamHeading' animate={teamHeading} ref={ref}>Our Team</motion.h1>
        <p className='ourteamPara'>
        {inView && 
          (<Typewriter
            string='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
            delay={35}
            cursor='_'
            stopBlinkinOnComplete
          />)
        }
        </p>
        <div className='teamMembers'>
          <motion.div className='member1' animate={member1}>
            <img src={Member1} alt="Team member1" />
            <h2 className='memberName'>Rebecca Martinez</h2>
            <h3 className='memberPosition'>Founder and CEO</h3>
            <div className='socialIcon'>
              <i className="fa fa-facebook" aria-hidden="true" />
              <i className="fa fa-twitter" aria-hidden="true" />
              <i className="fa fa-linkedin-square" aria-hidden="true" />
              <i className="fa fa-instagram" aria-hidden="true" />
            </div>
          </motion.div>
          <motion.div className='member1' animate={member2}>
            <img src={Member2} alt="Team member1" />
            <h2 className='memberName'>Rebecca Martinez</h2>
            <h3 className='memberPosition'>Founder and CEO</h3>
            <div className='socialIcon'>
              <i className="fa fa-facebook" aria-hidden="true" />
              <i className="fa fa-twitter" aria-hidden="true" />
              <i className="fa fa-linkedin-square" aria-hidden="true" />
              <i className="fa fa-instagram" aria-hidden="true" />
            </div>
          </motion.div>
          <motion.div className='member1'  animate={member3}>
            <img src={Member3} alt="Team member1"/>
            <h2 className='memberName'>Rebecca Martinez</h2>
            <h3 className='memberPosition'>Founder and CEO</h3>
            <div className='socialIcon'>
              <i className="fa fa-facebook" aria-hidden="true" />
              <i className="fa fa-twitter" aria-hidden="true" />
              <i className="fa fa-linkedin-square" aria-hidden="true" />
              <i className="fa fa-instagram" aria-hidden="true" />
            </div>
          </motion.div>
          <motion.div className='member1' animate={member4}>
            <img src={Member4} alt="Team member1" />
            <h2 className='memberName'>Rebecca Martinez</h2>
            <h3 className='memberPosition'>Founder and CEO</h3>
            <div className='socialIcon'>
              <i className="fa fa-facebook" aria-hidden="true" />
              <i className="fa fa-twitter" aria-hidden="true" />
              <i className="fa fa-linkedin-square" aria-hidden="true" />
              <i className="fa fa-instagram" aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Ourteam
