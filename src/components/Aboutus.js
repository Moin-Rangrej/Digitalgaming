import React from 'react'
import Person from '../img/person.jpg'
import { Typewriter } from 'react-typewriting-effect'
import { useInView } from 'react-intersection-observer'
import { motion , useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import '../css/Styleabout.css'

const Aboutus = () => {
    
  const {ref,inView} = useInView({
    threshold : 0.2
  })

  const aboutHeading = useAnimation()
  const aboutimage = useAnimation()
  const aboutpara = useAnimation()

  useEffect(() => {
    console.log('From about page' , inView);
    if (inView) {
      aboutHeading.start({
        opacity: 1,
        x: 0,
        transition: { type: 'spring', delay: 1, duration: 2, stiffness: 100 }  
      })
      aboutimage.start({
        opacity: 1,
        x:0, 
        transition:{
          type: 'spring',
          delay: 2,
          duration: 2,
          stiffness: 40
        }
      })
      aboutpara.start({
        opacity: 1,
        x: 0,
        transition:{
          type: 'spring',
          delay: 2,
          duration: 2,
          stiffness: 40
        }
      })
    }
  
    if (!inView) {
        aboutHeading.start({
          opacity: 0,
          x : -1000
        })
        aboutimage.start({
          opacity: 0,
          x: -1000
        })
        aboutpara.start({
          opacity: 0,
          x: 1000
        })
    }
  },[inView])

  

  return (
    <>
      <div className='aboutUs container' id='about' ref={ref}>
        <motion.h1 className='aboutusHeading' animate={aboutHeading} >About Us</motion.h1>
        <p className='aboutusPara'>
          {inView && 
          (<Typewriter
            string='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
            delay={35}
            cursor='_'
            stopBlinkinOnComplete
          />)
        }
        </p>
        <div className='imagePara' ref={ref}>
        <motion.img src={Person} alt="Person Image" animate={aboutimage}/>
        <motion.p className='aboutusPara2' animate={aboutpara}>
          Rutrum aliquam vestibulum gravida aliquam. Quis in tempor tellus, interdum et feugiat tellus. Orci viverra
          imperdiet ipsum sed id. Semper justo integer mauris ullamcorper fringilla in adipiscing cras. Odio lectus
          lacinia pretium, aliquet mattis enim ut sodales curabitur. Duis cras sit vestibulum sed fermentum, duis
          ornare sagittis orci. Pellentesque vitae, pulvinar velit tincidunt ultricies nibh auctor purus. Sed bibendum
          sit posuere natoque rhoncus, consequat curabitur ullamcorper morbi. In justo etiam risus odio imperdiet tincidunt.
          Elementum risus scelerisque lorem netus faucibus eu vel aliquam. Mattis in eget arcu neque, consectetur
          purus, sit lorem commodo. Vuet cras massa blandit
        </motion.p>
        </div>
      </div>
    </>
  )
}

export default Aboutus