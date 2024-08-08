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
   <div>
   <h3 className="text-xl font-semibold mb-4">Technologies</h3>
   <div>
    hi
   </div>
   </div>
   <hr className="text-slate-300  w-[90%] items-center mx-auto"/>
  </>
  )
}

export default Technologies
