import React from 'react'
import { projects } from '../../helper/Projects'

function Project() {
  return (
    <>
    
              {projects.map((data)=>{
                return(
                  <div className='hover:bg-slate-400  bg-white  dark:bg-dark  dark:hover:bg-secondary dark:bg-opacity-80 flex flex-col justify-center items-center gap-y-5 flex-wrap' >
                    <div>
                      {data.icon}
                    </div>
                    <h3 className='text-xl'>{data.topic}</h3>
                    <p className='text-slate-600 capitalize'>{data.project}</p>
                    </div>
                )
              })}   
     
           
    </>
  )
}

export default Project
