import React from 'react'
import './contact.css'
import {MdOutlineEmail} from  'react-icons/md'
import {RiMessengerLine} from  'react-icons/ri'
import {BsWhatsapp} from  'react-icons/bs'

export default function contact() {
  return (
    // <div>contact</div>
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>narnowin195@gmail.com</h5>
            <a href="mailto:narnowin195@gmail.com" target="_blank">Send A Message</a>

          </article>
          <article className='contact__option'>
          <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Winarno</h5>
            <a href="https://facebook.com" target="_blank">Send A Message</a>

          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>081477084167</h5>
            <a href="https://wa.me/6281477084167" target="_blank">Send A Message</a>
          </article>
        </div>
      <form action="">
        <input type="text" name='name' placeholder='your full name' required />
        <input type="email" name='email' placeholder='your email' required />
        <textarea name="message" id="" cols="30" rows="7" placeholder='your message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send</button>
      </form>
      </div>
    </section>
  )
}
