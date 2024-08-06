import React from "react";

import Profile from "./Profile/Profile";
import Cloud from './Profile/Cloud'
function Details() {
  return (
    <>
      {/* Hero-Details */}
      <Profile/>
      {/* Languages */}
      <div>
      Languages
      <hr className="text-slate-300  w-[90%] items-center mx-auto"/>
      </div>
      {/* Technologies */}
      <div>
      Technologies
      <hr className="text-slate-300  w-[90%] items-center mx-auto"/>
      </div>
      {/* Frameworks */}
      <div>
      Frameworks
      <hr className="text-slate-300  w-[90%] items-center mx-auto"/>
      </div>
      {/* Tools */}
      <div>
      Tools
      <hr className="text-slate-300  w-[90%] items-center mx-auto"/>
      </div>
      {/* Approaches */}
      <div>
      Approaches
      <hr className="text-slate-300  w-[90%] items-center mx-auto"/>
      </div>
      {/* Cloud */}
      <div>
      <Cloud/>
     
      </div>
    </>
  );
}

export default Details;
