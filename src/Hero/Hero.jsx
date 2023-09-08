import React from 'react';
import bg_img from '../assets/Path.png';
import hero_img  from '../assets/Group.png';
import './hero.css';
import Button from '../Button/Button';

const Hero = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Introduce Your Product <br/> Quickly & Effectively</h1>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
           Aenean massa. 
           Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
           mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
           Nulla consequat massa quis enim.</p>

        <div className='landing_button'>
         <Button text={'Purchase UI Kit'}/>
         <Button text={'Learn More'}/>
        </div>
      

    </div>

    <div className="gpt3__header-image">
      <img src={bg_img}    alt=""  style={{position:'absolute', right:'0'}} className='bg-img'/>
      <img src={hero_img}  alt=""  style={{position:'absolute', right:'0'}} className='hero_img'/>
    </div>
  </div>
);

export default Hero;