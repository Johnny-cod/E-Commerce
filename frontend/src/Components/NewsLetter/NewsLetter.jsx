import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className = 'newsletter'>
        <h1>Get Exclusive Offers On Your E-Mail.</h1>
        <p>Subscribe To Our Newsletter And Stay Updated.</p>
        <div>
            <input type = "email" placeholder = 'Your Email ID'/>
            <button>Subscribe</button>
            
        </div>
    </div>
  )
}

export default NewsLetter