import React from 'react'
import './cta.css'

function Button({text}) {
  return (
    <div>
        <div className="landing__navbar-sign">
        <button type="button">{text}</button>
      </div>
    </div>
  )
}

export default Button