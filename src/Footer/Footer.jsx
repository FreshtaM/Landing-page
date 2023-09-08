import React from 'react'
import   './footer.css'
import Button from '../Button/Button'

function Footer() {
  return (
    <div>
        <div className='footer'>
              <div className='landing_footer__content'>
                 
                <p>©2023 Yourcompany</p>
                <h1>Landing</h1>
                 <Button text={'Purchase now'}/>           
              
              </div>
              

              <hr/>
              
        </div>

    </div>
  )
}

export default Footer