import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
const data=[
  {
    id:1,
    image:IMG1,
    title:"Crypto Currency Dashboard & Financial Visualization",
    github:"http://github.com",
    demo:"https://dribbble.com/bo"
  },
  {
    id:2,
    image:IMG2,
    title:"Crypto Currency Dashboard & Financial Visualization2",
    github:"http://github.com",
    demo:"https://dribbble.com/bo"
  },
  {
    id:3,
    image:IMG3,
    title:"Crypto Currency Dashboard & Financial Visualization3",
    github:"http://github.com",
    demo:"https://dribbble.com/bo"
  },
  {
    id:4,
    image:IMG4,
    title:"Crypto Currency Dashboard & Financial Visualization4",
    github:"http://github.com",
    demo:"https://dribbble.com/bo"
  },
  {
    id:5,
    image:IMG5,
    title:"Crypto Currency Dashboard & Financial Visualization5",
    github:"http://github.com",
    demo:"https://dribbble.com/bo"
  },
  {
    id:6,
    image:IMG6,
    title:"Crypto Currency Dashboard & Financial Visualization6",
    github:"http://github.com",
    demo:"https://dribbble.com/bo"
  },
]


export default function portofolio() {
  return (
    // <div>portofolio</div>
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>
      <div className="container portofolio__container">
        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article key={id} className='portofolio_item'>
              <div className="portofolio__item-image">
                <img src={image } alt="" />
              </div>
                <h3>{title}</h3>
                <div className="portofolio__item-cta">
                <a href={github} className='btn' target="_blank">Github</a>
                <a href={demo} target="_blank" className='btn btn-primary'>Live Demo</a>
                </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}
