import React from 'react'
import { useSpring, animated } from 'react-spring';
function Technologies() {
  const languages = [
    { language: 'Java', percentage: 85 },
    { language: 'JavaScript', percentage: 70 },
    { language: 'C++', percentage: 50 },
  ];
  return (
  <>
   <div className='p-3'>
   <h3 className="text-xl font-semibold mb-4">Technologies</h3>
   <div className=''>
    <p className='text-base p-2'>Orchestration(<span className='text-primary'>Kubernete</span>)</p>
    <p className='text-base p-2'>containerization(<span className='text-primary'>Docker</span>)</p>
    <p className='text-base p-2'>Version Controlling(<span className='text-primary'>Git/GitHub</span>)</p>
    <p className='text-base p-2'>Database(<span className='text-primary'>MySQL,MongoDB,JDBC</span>)</p>
   </div>
   </div>
   <hr className="text-slate-300  w-[90%] items-center mx-auto"/>
  </>
  )
}

export default Technologies
