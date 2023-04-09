import React from 'react'
import Game1 from '../img/Game1.jpg'
import Game2 from '../img/Game2.jpg'
import Googleplay from '../img/Googleplay.jpg'
import Appstore from '../img/Appstore.jpg'
import { motion, useAnimation } from 'framer-motion'
import { Typewriter } from 'react-typewriting-effect'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import '../css/Stylegame.css'

const Games = () => {

  const { ref, inView } = useInView({
    threshold: 0.2
  })

  // Animation names
  const gameanimation = useAnimation()
  const game1 = useAnimation()
  const Gametitle = useAnimation()
  const Gamepara = useAnimation()
  const game2 = useAnimation()
  const game2Title = useAnimation()
  const Game2para = useAnimation()
  const box1button1 = useAnimation()
  const box1button2 = useAnimation()
  const box2button1 = useAnimation()
  const box2button2 = useAnimation()

  useEffect(() => {
    console.log("from game", inView);
    if (inView) {
      gameanimation.start({
        opacity: 1,
        x: 0,
        transition: {
          type: 'spring',
          stiffness: 100,
          delay: 1
        }
      })
      game1.start({
        opacity: 1,
        x: 0,
        transition: { type: 'spring', duration: 2, stiffness: 50 }
      })
      Gametitle.start({
        x: 0,
        transition: { type: 'spring', delay: 1, duration: 2, stiffness: 100 }
      })
      Gamepara.start({
        opacity: 1,
        transition: {
          delay: 1,
        }
      })
      game2.start({
        opacity: 1,
        x:0,
        transition:{
          type:"spring",
          duration: 1,
          stiffness: 40
        }
      })
      game2Title.start({
        opacity:1,
        x: 0,
        transition: { 
          type: 'spring', delay: 1, duration: 2, stiffness: 100 
        }
      })
      Game2para.start({
        opacity: 1,
        transition: {
          delay: 1,
        }
      })
      box1button1.start({
        opacity: 1,
        x: 0,
        transition:{
          type: 'spring',
          delay: 3,
          duration: 2,
          stiffness: 50
        }
      })
      box1button2.start({
        opacity: 1,
        x: 0,
        transition:{
          type: 'spring',
          delay: 3,
          duration: 2,
          stiffness: 50
        }
      })
      box2button1.start({
        opacity: 1,
        x: 0,
        transition:{
          type: 'spring',
          delay: 3,
          duration: 2,
          stiffness: 50
        }
      })
      box2button2.start({
        opacity: 1,
        x: 0,
        transition:{
          type: 'spring',
          delay: 3,
          duration: 2,
          stiffness: 50
        }
      })
    }


    if (!inView) {
      gameanimation.start({
        opacity: 0,
        x: -1000
      })
      game1.start({
        opacity: 0,
        x: -1000  
      })
      Gametitle.start({
        x: -1000
      })
      Gamepara.start({
        opacity: 0
      })
      game2.start({
        opacity: 0,
        x: 1000
      })
      game2Title.start({
        opacity: 0,
        x: 1000
      })
      Game2para.start({
        opacity: 0
      })
      box1button1.start({
        opacity: 0,
        x: -500 
      })
      box1button2.start({
        opacity: 0,
        x: 1000 
      })
      box2button1.start({
        opacity: 0,
        x: 500 
      })
      box2button2.start({
        opacity: 0,
        x: -1000 
      })
    }
  }, [inView])
  return (
    <>
      <div className='gameBackground containe' id='game' ref={ref}>
        <motion.h1 className='gameHeading' animate={gameanimation}>Games</motion.h1>
        <p className='gamePara'>
        {inView && 
          (<Typewriter
            string='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
            delay={35}
            cursor='_'
            stopBlinkinOnComplete
          />)
        }
        </p>
        {/* Game boxes */}
        <div className='gameBoxes'>
          {/* First Game Box */}
          <div className='gameBox'>
            <motion.img src={Game1} alt="Boy play Game" className='Game1' animate={game1} />
            <motion.h1 className='gameTitle' animate={Gametitle}>Game Title</motion.h1>
            <motion.p className='boyGamepara' animate={Gamepara}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at integer pharetra duis mi neque. Bibendum dolor posuere felis nulla.
              In augue Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at integer pharetra duis mi neque.
              Bibendum dolor posuere felis nulla. In augue
            </motion.p>
            <motion.img src={Googleplay} alt="Google play Icon" className='googlePlay' animate={box1button1}/>
            <motion.img src={Appstore} alt="App Store Icon" className='appStore' animate={box1button2}/>
          </div>
          {/* Second Game box */}
          <div className='gameBox2'>
            <motion.img src={Game2} alt="Game Screens" className='Game2' animate={game2}/>
            <motion.h1 className='gameTitle' animate={game2Title}>Game Title</motion.h1>
            <motion.p className='boyGamepara' animate={Game2para}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at integer pharetra duis mi neque. Bibendum dolor posuere felis nulla.
              In augue Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at integer pharetra duis mi neque.
              Bibendum dolor posuere felis nulla. In augue
            </motion.p>
            <div className='socialIcons'>
              <motion.img src={Googleplay} alt="Google play Icon" className='googlePlay' animate={box2button1}/>
              <motion.img src={Appstore} alt="App Store Icon" className='appStore' animate={box2button2}/>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Games
