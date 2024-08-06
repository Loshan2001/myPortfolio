import React from 'react'
import Logo from '../../../assets/logo.JPG'
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
function Profile() {
  return (
    <>
       <div className="flex flex-col gap-5 items-center justify-center flex-wrap ">
        <img src={Logo} alt="" className="w-48 h-48 rounded-full  ring-1" />
        <p className='font-bold'>Loshan Saravanaperumal</p>
        <div className="flex justify-evenly gap-10 ">
         <AiFillLinkedin className="size-7 p-1 rounded-full cursor-pointer bg-yellow dark:bg-black"/>
          <AiFillGithub className="size-7 p-1 rounded-full cursor-pointer bg-yellow  dark:bg-black"/>
          <AiFillInstagram className="size-7 p-1 rounded-full cursor-pointer bg-yellow dark:bg-black "/>
          <AiFillTwitterCircle className="size-7 p-1 rounded-full cursor-pointer bg-yellow  dark:bg-black"/>
        </div>    
        <div className='w-full flex p-2 flex-wrap items-center justify-between '>
          <div className='flex flex-col items-start gap-4'>
          <span className='bg-yellow dark:bg-transparent'>Email  </span>
          <span className='bg-yellow dark:bg-transparent'>phone  </span>
          <span className='bg-yellow dark:bg-transparent'>Age  </span>
          <span className='bg-yellow dark:bg-transparent'>Residence  </span>
          <span className='bg-yellow dark:bg-transparent'>Address  </span>
          </div>
          <div className='flex flex-col items-end gap-4'>
            <span>loshansp2001@gmail.com</span>
            <span>+94 76 248 1009</span>
            <span>23</span>
            <span>Sri Lanka</span>
            <span>Nelliady, Point-Pedro</span>
          </div>
        </div> 
      <hr className="text-slate-300  w-[90%] items-center mx-auto "/>
      </div>
    </>
  )
}

export default Profile
