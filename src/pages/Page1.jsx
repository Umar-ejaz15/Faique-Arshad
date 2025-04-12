import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import About2 from '../components/About2'
import Hire from '../components/Hire'
import Services from '../components/Services'
import Project from '../components/Project'
import Work from '../components/Work'
import Client from '../components/Client'
import Contact from '../components/Contact'

const Page1 = () => {
  return (
    <div className=' min-h-screen'> 
      <Navbar/>
      <About/>
      <About2/>
      <Hire/>
      <Services/>
      <Project/>
      <Work/>
      <Hire/>
      <Client/>
      <Contact/>

    </div>
  )
}

export default Page1
