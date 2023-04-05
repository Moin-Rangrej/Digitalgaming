import React, { useEffect } from 'react'
// import Digitalgame from '../img/background1.jpg'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-typewriting-effect'



const Home = () => {

  return (
      <motion.div className='Digitalgame' id='home'>
        
        <div>
        {/* // initial={{ x : -200}}
        // animate={{ x: 0}}
        // transition={{type: "spring" , stiffness: 120 , duration: 2}}  
         */}
            <span className='Digitalgame-Heading'>
              <Typewriter
                  string = 'Digital Gaming NFTs'
                  delay = {50}
                  cursor = '_'
                  stopBlinkinOnComplete
              />
           </span>
          </div> 

        <motion.p className='Digitalgame-para'
          initial={{ x : 2000}}
          animate={{ x : 0}}
          transition={{type: "spring" , stiffness: 50 , duration: 1}} 
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at integer pharetra duis mi neque.
          Bibendum dolor posuere felis nulla. In augue
        </motion.p>
        <motion.button className='Digitalgame-btn'
        initial={{ opacity:0 , x: -200}}
        animate={{opacity:1 , x : 0}}
        transition={{
          type: 'spring',
          stiffness: 300
        }}
          whileHover={{
            scale: 1.2,
            boxShadow: '0px 0px 10px white'
          }}
        >Read More</motion.button>
      </motion.div>
  )
}

export default Home
