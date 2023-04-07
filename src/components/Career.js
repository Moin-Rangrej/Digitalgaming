import React from 'react'
import { motion,useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Typewriter } from 'react-typewriting-effect'
import { useEffect } from 'react'

const Career = () => {

  const {ref,inView} = useInView({
    threshold: 0.2
  })

  const careerHeading = useAnimation()
  
  const mycard1 = useAnimation()
  const mycard2 = useAnimation()
  const mycard3 = useAnimation()

  useEffect(() => {
      console.log('from career page' , inView); 

      if (inView) {
        careerHeading.start({
          opacity: 1,
          x: 0,
          transition:{
            type:'spring',
            duration:2,
            delay: 1,
            stiffness: 100
          }
        })
        mycard1.start({
          opacity: 1,
          x:0,
          transition:{
            type: 'spring',
            delay: 1,
            duration: 1,
            damping: 50
          }
        })
        mycard2.start({
          opacity:1,
          y: 0,
          transition:{
            type:'spring',
            delay: 1,
            duration: 1,
            damping: 50
          }
        })
        mycard3.start({
          opacity: 1,
          x: 0,
          transition:{
            type:'spring',
             delay:1,
             duration: 1,
             damping: 50
          }
        })
      }

      if (!inView) {
        careerHeading.start({
          opacity: 0,
          x: 1000
        })
        mycard1.start({
          opacity: 0,
          x: -500
        })
        mycard2.start({
          opacity: 0,
          y: -500
        })
        mycard3.start({
          opacity: 0,
          x: 500
        })
      }

  },[inView])


  return (
    <>
      <div className='careerDiv container' id='career' ref={ref}>
        <motion.h1 className='careerHeading' animate={careerHeading}>Career</motion.h1>
        <p className='careerPara'>
          {inView && (
            <Typewriter
            string='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
            delay={40}
            cursor='|'
            stopBlinkinOnComplete
          />
          )}
        </p>
        <div className='careerCards'>
          <motion.div className='card1' animate={mycard1}>
            <h1 className='cardHeading'>Tincidunt Vision</h1>
            <p className='cardPara'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at integer pharetra duis mi neque.
              Bibendum dolor posuere felis nulla. In augue Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              In at integer pharetra duis mi neque.
            </p>
            <button className='cardbtn'>Read More</button>
          </motion.div>
          <motion.div className='card1' animate={mycard2}>
            <h1 className='cardHeading'>Tincidunt Vision</h1>
            <p className='cardPara'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at integer pharetra duis mi neque.
              Bibendum dolor posuere felis nulla. In augue Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              In at integer pharetra duis mi neque.
            </p>
            <button className='cardbtn'>Read More</button>
          </motion.div>
          <motion.div className='card1' animate={mycard3}>
            <h1 className='cardHeading'>Tincidunt Vision</h1>
            <p className='cardPara'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at integer pharetra duis mi neque.
              Bibendum dolor posuere felis nulla. In augue Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              In at integer pharetra duis mi neque.
            </p>
            <button className='cardbtn'>Read More</button>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Career
