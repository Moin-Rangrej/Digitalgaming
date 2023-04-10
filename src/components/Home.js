import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Typewriter } from 'react-typewriting-effect'
import { useInView } from 'react-intersection-observer'
import '../css/Stylehome.css'


const Home = () => {
  const { ref, inView } = useInView({
    threshold: 0.2
  })
  const paraAnimation = useAnimation()
  const buttonAnimation = useAnimation()

  useEffect(() => {
    console.log("from home", inView);
    if (inView) {
      paraAnimation.start({
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          stiffness: 50,
          duration: 1
        }
      })
      buttonAnimation.start({
        x: 0,
        transition: {
          type: 'spring',
          stiffness: 100,
          delay: 1,
          duration: 1
        }
      })
    }
    if (!inView) {
      paraAnimation.start({
        opacity: 0,
        x: -200
      })
      buttonAnimation.start({
        x: -300
      })
    }
  }, [inView])
  return (
    <motion.div className='Digitalgame' id='home' ref={ref}>

      <div>

        <span className='Digitalgame-Heading'>
          {
            inView && (
              <Typewriter
                string='Digital Gaming NFTs'
                delay={50}
                cursor='_'
                stopBlinkinOnComplete
              />
            )
          }
        </span>
        <motion.p className='Digitalgame-para' animate={paraAnimation}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at integer pharetra duis mi neque.
          Bibendum dolor posuere felis nulla. In augue
        </motion.p>
        <motion.button className='Digitalgame-btn'
          animate={buttonAnimation}
          whileHover={{
            scale: 1.2,
            color: 'black',
            boxShadow: '0px 0px 10px white'
          }}
        >Read More</motion.button>
      </div>


    </motion.div>
  )
}

export default Home
