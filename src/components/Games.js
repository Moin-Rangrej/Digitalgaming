import React from 'react'
import Game1 from '../img/Game1.jpg'
import Game2 from '../img/Game2.jpg'
import Googleplay from '../img/Googleplay.jpg'
import Appstore from '../img/Appstore.jpg'
import { motion, useAnimation } from 'framer-motion'
import { Typewriter } from 'react-typewriting-effect'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const game1 = {
  hidden:{
    opacity: 0,
    x: -1000
  },
  visible: {
    opacity: 1,
    x: 0,
    transition:{ type:'spring',duration: 2,stiffness: 50}
  }
}

const Gametitle = {
  hidden:{
    x: -1000
  },
  visible:{
    x: 0,
    transition:{type:'spring' , delay: 1 , duration:2 , stiffness: 100}
  }
}

const Gamepara = {
  hidden:{
    opacity: 0
  },
  visible:{
    opacity:1,
    transition:{
      delay: 2,
    }
  }
}


const Games = () => {

  const {ref,inView} = useInView({
    threshold: 0.2
  })

  // Animation names
  const gameanimation = useAnimation()
  const typePara =  useAnimation()

  useEffect(() => {
    console.log("from game" , inView);
    if (inView) {
      gameanimation.start({
        opacity:1,
        x:0,
        transition:{
          type: 'spring',
          stiffness: 100,
          delay: 1
        }
      })
    } 
    if (!inView) {
      gameanimation.start({
        opacity:0,
        x:-1000       
      })
    }
  },[inView])
  return (
    <>
      <div className='gameBackground containe' id='game' ref={ref}>
        <motion.h1 className='gameHeading'
          animate={gameanimation}
        >Games</motion.h1>
        <p className='gamePara'>
        <Typewriter
                  string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
                  delay = {35}
                  cursor = '_'
                  stopBlinkinOnComplete
              />
        </p>
        {/* Game boxes */}
        <div className='gameBoxes'>
          {/* First Game Box */}
          <div className='gameBox'>
            <motion.img src={Game1} alt="Boy play Game" className='Game1' variants={game1} initial="hidden" animate="visible"/>
            <motion.h1 className='gameTitle' variants={Gametitle} initial="hidden" animate="visible">Game Title</motion.h1>
            <motion.p className='boyGamepara' variants={Gamepara} initial="hidden" animate="visible">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at integer pharetra duis mi neque. Bibendum dolor posuere felis nulla.
              In augue Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at integer pharetra duis mi neque.
              Bibendum dolor posuere felis nulla. In augue
            </motion.p>
            <img src={Googleplay} alt="Google play Icon" className='googlePlay' />
            <img src={Appstore} alt="App Store Icon" className='appStore' />
          </div>
          {/* Second Game box */}
          <div className='gameBox2'>
          <img src={Game2} alt="Game Screens" className='Game2'/>
          <h1 className='gameTitle'>Game Title</h1>
          <p className='boyGamepara'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at integer pharetra duis mi neque. Bibendum dolor posuere felis nulla.
            In augue Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at integer pharetra duis mi neque.
            Bibendum dolor posuere felis nulla. In augue
          </p>
          <div className='socialIcons'>
            <img src={Googleplay} alt="Google play Icon" className='googlePlay' />
            <img src={Appstore} alt="App Store Icon" className='appStore' />
          </div>
        </div>
        </div>
        
      </div>
    </>
  )
}

export default Games
