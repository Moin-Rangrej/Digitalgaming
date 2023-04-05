import React from 'react'
import Person from '../img/person.jpg'

const Aboutus = () => {
   

  return (
    <>
      <div className='aboutUs container' id='about'>
        <h1 className='aboutusHeading'>About Us</h1>
        <p className='aboutusPara'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </p>
        <div className='imagePara'>
        <img src={Person} alt="Person Image"/>
        <p className='aboutusPara2'>
          Rutrum aliquam vestibulum gravida aliquam. Quis in tempor tellus, interdum et feugiat tellus. Orci viverra
          imperdiet ipsum sed id. Semper justo integer mauris ullamcorper fringilla in adipiscing cras. Odio lectus
          lacinia pretium, aliquet mattis enim ut sodales curabitur. Duis cras sit vestibulum sed fermentum, duis
          ornare sagittis orci. Pellentesque vitae, pulvinar velit tincidunt ultricies nibh auctor purus. Sed bibendum
          sit posuere natoque rhoncus, consequat curabitur ullamcorper morbi. In justo etiam risus odio imperdiet tincidunt.
          Elementum risus scelerisque lorem netus faucibus eu vel aliquam. Mattis in eget arcu neque, consectetur
          purus, sit lorem commodo. Vuet cras massa blandit
        </p>
        </div>
      </div>
    </>
  )
}

export default Aboutus