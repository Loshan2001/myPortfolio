import React from 'react'
import Logo from '../../../assets/logo.JPG'
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
function Profile() {
  return (
    <>
       <div className="flex flex-col gap-3 items-center">
        <img src={Logo} alt="" className="w-48 h-48 rounded-full  ring-1" />
        <p>Loshan Saravanaperumal</p>
        <div className="flex justify-evenly gap-10 ">
         <AiFillLinkedin className="size-5"/>
          <AiFillGithub className="size-5"/>
          <AiFillInstagram className="size-5"/>
          <AiFillTwitterCircle className="size-5"/>
        </div>     
      </div>
      <hr className="text-slate-300  w-[90%] items-center mx-auto"/>
    </>
  )
}

export default Profile
