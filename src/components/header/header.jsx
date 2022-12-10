import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './headerSocial'

export default function header() {
  return (
<header>
  <div className="container header__container">
    <h5>Hallo I'm</h5>
    <h1>Winarno</h1>
    <h5 className='text-light'>Fullstack Development</h5>
     <CTA/>
     <HeaderSocial/>
     <div className="me">
      <img src={ME} alt="me" />
     </div>
     <a href="#contact" className='scroll_down'>
        Scroll  Down
     </a>
  </div>
</header>
    )
}