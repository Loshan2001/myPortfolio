import React from "react";

function ProjectHeader() {
  return (
    <>
      <div className="flex flex-col justify-items-center w-full h-full">
        <h1 className="text-center text-xl uppercase font-semibold tracking-wide py-3	">Showcase of My Work</h1>
        <p className="text-center text-slate-600 text-base p-1">
          This section highlights a selection of my projects, reflecting my
          journey as a developer and showcasing my skills in various
          technologies. Each project demonstrates my ability to design, develop,
          and implement software solutions, from frontend interfaces to backend
          architectures. My work spans diverse areas, including web and mobile
          applications, microservice-based systems, and DevOps practices.
          Through these projects, I've honed my skills in React, React Native,
          Node.js, Docker, Kubernetes, and more. These experiences have not only
          strengthened my technical expertise but also my problem-solving
          abilities, creativity, and passion for continuous learning and
          innovation.
        </p>
      </div>
    </>
  );
}

export default ProjectHeader;
