import React from 'react'
import Book from '../img/book.jpg'

const Header = () => {
  return (
    <>

     <div className='row container '>
     {/* Header DIGITAL KATHA */}
        <div className='col-5'>
            <img src={Book} alt="Digital Katha Book" className='kathabook'/>
            <h3 className='Digitalkatha'>DIGITAL KATHA</h3>
        </div>
        <div className='col-7'>
            <div className='pages'>
                <p>Homjjjjje</p> 
                <p>Games</p>
                <p>About us</p>
                <p>Our Team</p>
                <p>Career</p>
                <button className='contatus'>Contact Us</button>
            </div>
        </div>
     </div> 
    </>
  )
}

export default Header
