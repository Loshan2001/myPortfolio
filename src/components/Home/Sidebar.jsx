import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { AiOutlineCode } from "react-icons/ai";
function Sidebar() {
  const [darkmode, setDarkmode] = useState(false);
  const toggleTheme = () => {
    //
    document.documentElement.classList.toggle("dark");
    setDarkmode(!darkmode);
  };
  return (
    <>
      <div>
        {darkmode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 m-7 hover:bg-yellow hover:bg-opacity-30 rounded-full cursor-pointer transition duration-500 ease-in-out "
            onClick={toggleTheme}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 m-7  hover:bg-slate-300 hover:bg-opacity-50 rounded-full cursor-pointer transition duration-500 ease-in-out "
            onClick={toggleTheme}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        )}
      </div>
      <div className=" h-4/5 flex flex-col gap-9">
        <AiFillHome className="size-8 m-7 rounded-full cursor-pointer"/>
        <AiFillMessage className="size-8 m-7 rounded-full cursor-pointer" title="send message" />
        <AiOutlineCode className="size-8 m-7 rounded-full cursor-pointer"/>
      </div>
    </>
  );
}

export default Sidebar;
