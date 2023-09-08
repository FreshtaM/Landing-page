import React from 'react'
import feature2 from '../assets/feature2.png'
import './feature2.css'

function Feature2() {
  return (
    <div>
    <div className="landing_feature2__section" id="home">
    <div className="landing_feature2__content">
       
      <h1 className="gradient__text">Light, Fast & Powerful</h1>
      <p>Lorem ipsum dolor sit amet, consectetuer
         adipiscing elit. Aenean commodo ligula eget dolor.
          Aenean massa. Cum sociis natoque penatibus et magnis 
          dis parturient montes, nascetur ridiculus 
         mus. Donec quam felis, ultricies nec, pellentesque eu,
         pretium quis, sem. Nulla consequat massa quis enim.</p>
    </div>

    <div className="landing_feature2__image">
      <img src={feature2}    alt=""  className='bg-img'/>
    </div>
    </div>
    </div>
  )
}

export default Feature2