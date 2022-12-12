import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/Nav'
import About  from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Portofolio from './components/portofolio/portofolio'
import Testimonial from './components/testimonial/testimonial'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Work from './components/work/work'


export default function App() {
  return (
    <div>
      <>
       <Header/>
       <Nav />
       <About/>
       <Experience/>
       <Work></Work>
       <Services/>
       <Portofolio/>
       <Testimonial/>
       <Contact/>
       <Footer/>
      </>
    </div>
  )
}
