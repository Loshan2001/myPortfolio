import React from 'react'
import './Hero.css'
import Intro from './Intro'
import Sidebar from './Sidebar'
import ProjectHeader from './ProjectHeader'
import Details from './Details'
import Project from './Project'
import DarkBackground from '../../assets/DarkBackground.svg'
function Hero() {
  return (
   <div className='wrapper max-w-full min-h-screen grid  bg-light dark:bg-black'>
        <div className='details  bg-white dark:bg-dark dark:text-white grid grid-cols-1'><Details/></div>
        <div className='intro  bg-white  dark:bg-dark  dark:text-white'><Intro/></div>
        <div className='sidebar  bg-white  dark:bg-dark  dark:text-white max-h-screen flex flex-col justify-between items-center'><Sidebar/></div>
        <div className='p-header   dark:text-white'><ProjectHeader/></div>
        <div className='project  dark:text-white grid grid-cols-3'>
           <Project/>
        </div>
   </div>
  )
}

export default Hero
