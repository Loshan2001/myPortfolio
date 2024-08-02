import React from 'react'
import './Hero.css'
import Project from './Project'
import Intro from './Intro'
import Sidebar from './Sidebar'
import ProjectHeader from './ProjectHeader'
import Details from './Details'
function Hero() {
  return (
   <div className='wrapper max-w-full min-h-screen grid  bg-light dark:bg-black'>
        <div className='details  bg-white dark:bg-dark dark:text-white'><Details/></div>
        <div className='intro  bg-white  dark:bg-dark  dark:text-white'><Intro/></div>
        <div className='sidebar  bg-white  dark:bg-dark  dark:text-white'><Sidebar/></div>
        <div className='p-header  dark:bg-dark  dark:text-white'><ProjectHeader/></div>
        <div className='project  bg-white  dark:bg-dark  dark:text-white'>
          
          <div className='bg-primary  dark:bg-black  dark:hover:bg-secondary'>1</div>
          <div className='bg-primary  dark:bg-black  dark:hover:bg-secondary'>2</div>
          <div className='bg-primary  dark:bg-black  dark:hover:bg-secondary'>3</div>
          <div className='bg-primary  dark:bg-black  dark:hover:bg-secondary'>4</div>
          <div className='bg-primary  dark:bg-black  dark:hover:bg-secondary'>5</div>
          <div className='bg-primary  dark:bg-black  dark:hover:bg-secondary'>6</div>
        </div>
   </div>
  )
}

export default Hero
