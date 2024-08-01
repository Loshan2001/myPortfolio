import React from 'react'
import './Hero.css'
import Project from './Project'
import Intro from './Intro'
import Sidebar from './Sidebar'
import ProjectHeader from './ProjectHeader'
import Details from './Details'
function Hero() {
  return (
   <div className='wrapper max-w-full min-h-screen grid   bg-light'>
        <div className='details'><Details/></div>
        <div className='intro'><Intro/></div>
        <div className='sidebar'><Sidebar/></div>
        <div className='p-header'><ProjectHeader/></div>
        <div className='project'>
          
          <div className='bg-primary'>1</div>
          <div className='bg-primary'>2</div>
          <div className='bg-primary'>3</div>
          <div className='bg-primary'>4</div>
          <div className='bg-primary'>5</div>
          <div className='bg-primary'>6</div>
        </div>
   </div>
  )
}

export default Hero
