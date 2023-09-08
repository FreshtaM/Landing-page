import React from 'react'
import './footer1.css'
// import styles from './MyCmponent.module.css';
import Button from '../Button/Button';


function Footer1() {
  return (
    <div>
       <div className='footer1-bg'>
       <div className='landing_footer1'>
         <h1>A Price To Suit Everyone</h1>
         
         <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
             Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis
             parturient montes, nascetur ridiculus </p>

             <h2>$40</h2>
             <h6>UI Design Kit</h6>

             <h5>See, One price. Simple.</h5>
              <Button  text={'Purchase Now'}/>
              </div>
       </div>
    </div>
  )
}

export default Footer1