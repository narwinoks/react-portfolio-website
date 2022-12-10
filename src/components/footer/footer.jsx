import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

export default function footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>EGATOR</a>
      <ul className='permalinks'>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Expeirience</a></li>
        <li><a href="">Services</a></li>
        <li><a href="">Portfolio</a></li>
        <li><a href="">Testimonials</a></li>
        <li><a href="">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter></IoLogoTwitter></a>
      </div>
      <div className="footer__copyright">
        <small>&copy;Winarno</small>
      </div>
    </footer>
  )
}
