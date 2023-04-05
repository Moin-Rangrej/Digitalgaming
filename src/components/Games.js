import React from 'react'
import Game1 from '../img/Game1.jpg'
import Game2 from '../img/Game2.jpg'
import Googleplay from '../img/Googleplay.jpg'
import Appstore from '../img/Appstore.jpg'

const Games = () => {
  return (
    <>
      <div className='gameBackground containe' id='game'>
        <h1 className='gameHeading'>Games</h1>
        <p className='gamePara'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </p>
        {/* Game boxes */}
        <div className='gameBoxes'>
          {/* First Game Box */}
          <div className='gameBox'>
            <img src={Game1} alt="Boy play Game" className='Game1'/>
            <h1 className='gameTitle'>Game Title</h1>
            <p className='boyGamepara'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at integer pharetra duis mi neque. Bibendum dolor posuere felis nulla.
              In augue Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at integer pharetra duis mi neque.
              Bibendum dolor posuere felis nulla. In augue
            </p>
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
