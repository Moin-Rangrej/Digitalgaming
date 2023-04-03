import React from 'react'
import Member1 from '../img/member1.jpg'
import Member2 from '../img/memeber2.jpg'
import Member3 from '../img/member3.jpg'
import Member4 from '../img/member4.jpg'


const Ourteam = () => {
  return (
    <>
      <div className='outTeambg'>
        <h1 className='ourteamHeading'>Our Team</h1>
        <p className='ourteamPara'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </p>
        <div className='teamMembers '>
          <div className='member1'>
            <img src={Member1} alt="Team member1" />
            <h2 className='memberName'>Rebecca Martinez</h2>
            <h3 className='memberPosition'>Founder and CEO</h3>
            <div className='socialIcon'>
              <i className="fa fa-facebook" aria-hidden="true" />
              <i className="fa fa-twitter" aria-hidden="true" />
              <i className="fa fa-linkedin-square" aria-hidden="true" />
              <i className="fa fa-instagram" aria-hidden="true" />
            </div>
          </div>
          <div className='member1'>
            <img src={Member2} alt="Team member1" />
            <h2 className='memberName'>Rebecca Martinez</h2>
            <h3 className='memberPosition'>Founder and CEO</h3>
            <div className='socialIcon'>
              <i className="fa fa-facebook" aria-hidden="true" />
              <i className="fa fa-twitter" aria-hidden="true" />
              <i className="fa fa-linkedin-square" aria-hidden="true" />
              <i className="fa fa-instagram" aria-hidden="true" />
            </div>
          </div>
          <div className='member1'>
            <img src={Member3} alt="Team member1" />
            <h2 className='memberName'>Rebecca Martinez</h2>
            <h3 className='memberPosition'>Founder and CEO</h3>
            <div className='socialIcon'>
              <i className="fa fa-facebook" aria-hidden="true" />
              <i className="fa fa-twitter" aria-hidden="true" />
              <i className="fa fa-linkedin-square" aria-hidden="true" />
              <i className="fa fa-instagram" aria-hidden="true" />
            </div>
          </div>
          <div className='member1'>
            <img src={Member4} alt="Team member1" />
            <h2 className='memberName'>Rebecca Martinez</h2>
            <h3 className='memberPosition'>Founder and CEO</h3>
            <div className='socialIcon'>
              <i className="fa fa-facebook" aria-hidden="true" />
              <i className="fa fa-twitter" aria-hidden="true" />
              <i className="fa fa-linkedin-square" aria-hidden="true" />
              <i className="fa fa-instagram" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ourteam
