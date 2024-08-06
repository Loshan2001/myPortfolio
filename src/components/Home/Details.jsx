import React from "react";

import Profile from "./Profile/Profile";
import Cloud from './Profile/Cloud'
import Languages from './Profile/Languages'
import Technology from './Profile/Technologies'
import FrameWork from './Profile/FrameWorks'
import Tools from './Profile/Tools'
import Approach from './Profile/Approaches'

function Details() {
  return (
    <>
      {/* Hero-Details */}
      <Profile/>
      {/* Languages */}
      <div>
      <Languages/>
       
      </div>
      {/* Technologies */}
      <div>
      <Technology/>
      
      </div>
      {/* Frameworks */}
      <div>
      <FrameWork/>
      
      </div>
      {/* Tools */}
      <div>
      <Tools/>
      
      </div>
      {/* Approaches */}
      <div>
      <Approach/>
     
      </div>
      {/* Cloud */}
      <div>
      <Cloud/>
     
      </div>
    </>
  );
}

export default Details;
