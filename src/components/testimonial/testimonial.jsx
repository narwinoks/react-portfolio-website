import React from 'react'
import './testimonial.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide,navigation } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
  import 'swiper/css/pagination';


const data=[
  {
    avatar:AVT1,
    name:"winarno",
    review:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, veniam. Ab veniam laborum mollitia pariatur, quibusdam quis ipsa consequatur vel impedit dicta accusamus aliquam at alias, quo quod nostrum suscipit."
    
  },
  {
    avatar:AVT2,
    name:"winarno2",
    review:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, veniam. Ab veniam laborum mollitia pariatur, quibusdam quis ipsa consequatur vel impedit dicta accusamus aliquam at alias, quo quod nostrum suscipit."
    
  },
  {
    avatar:AVT2,
    name:"winarno2",
    review:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, veniam. Ab veniam laborum mollitia pariatur, quibusdam quis ipsa consequatur vel impedit dicta accusamus aliquam at alias, quo quod nostrum suscipit."
    
  },
  {
    avatar:AVT2,
    name:"winarno2",
    review:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, veniam. Ab veniam laborum mollitia pariatur, quibusdam quis ipsa consequatur vel impedit dicta accusamus aliquam at alias, quo quod nostrum suscipit."
    
  }
]

export default function testimonial() {
  return (
    <section id='testimonial'>
      <h5>Review From Client</h5>
      <h2>Testimonial</h2>
      <Swiper
         // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40} 
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="container testimonials__container">
      {
          data.map(({avatar,name,review})=>{
            return(
              <SwiperSlide className='testimonial'>
              <div className="client__avatar">
                <img src={AVT1} alt="avatar one" />  
              </div>  
                <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>
                    {review}
                  </small>
            </SwiperSlide>
              )
            })
          }         
      </Swiper>
    </section>
  )
}
