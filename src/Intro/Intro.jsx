import React from 'react'
import './intro.css'
import introimg from '../assets/feature2.png'

function Intro() {
  return (
    
        <div className='Intro__header'>
           <div className='Intro__header__content'>
            <h1>Light, Fast & Powerful</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
             mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>

<div className='Intro__header__content_2'>

            <div>
            <h3>Title Goes Here</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
            </div>

            <div>
            <h3>Title Goes Here</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
            </div>
</div>
           </div>

           <div className='landing_intro__img'>
            <img src={introimg} alt=""  className='intro-img'/>
           </div>
        </div>
    
  )
}

export default Intro