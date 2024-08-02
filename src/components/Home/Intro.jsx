import React from "react";
import { Button } from "@headlessui/react";

import Loshan from "../../assets/loshan.png";
import Losh from "../../assets/losh.png";
function Intro() {
  return (
    <>
      <div className="flex gap-x-5 ">
        <div className="flex basis-10/12 flex-col justify-center items-start p-6">
          <h1 className="text-5xl font-bold capitalize mb-5">
            I'm Loshan Saravanaperumal
          </h1>
          <p className="text-lg my-6 text-start dark:text-slate-400 text-slate-600">
            I am an ambitious software engineering student skilled in Java, C++,
            and JavaScript, with web application experience. I seek an
            internship to apply my knowledge, gain practical experience, and
            contribute to innovative projects. I have strong problem-solving and
            teamwork skills.
          </p>
          <Button className="flex items-center justify-evenly bg-primary border-3 px-4 py-2 dark:bg-secondary rounded text-lg text-black hover:bg-primary">
            send message
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Button>
        </div>
        <div>
          <img src={Losh} alt="hero img" className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

export default Intro;
