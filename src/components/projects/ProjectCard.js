import React from "react";
import "./project_card.css";

export default function ProjectCard(props) {
  const { project, toggleProjectVisibility } = props;
  console.log(project.description)

  return (
    <div
      className={
        project.isVisible && project.isLeft
          ? "w-full h-full px-2 lg:w-5/6 xl:2/3 2xl:w-3/5 md:h-96 md:mb-10"
          : "w-full h-full px-2 lg:w-5/6 xl:2/3 2xl:w-3/5 md:h-96 md:mb-10"
      }
      id={project.id}
    >
      {project.isLeft ? (
        <div className="w-full h-full flex flex-col md:flex-row items p-3 rounded-md">
          <div className="w-64 h-64 lg:w-80 lg:h-80 flex items-center justify-center rounded-full bg-white m-auto flip lg:hover:none">
            <div className="flip-content">
              <div className="flip-front flex items-center justify-center">
                {project.getIcon()}
              </div>
              <div className="flip-back">
                {project.getBackContent(toggleProjectVisibility)}
              </div>
            </div>
          </div>
          <div className="w-2/3 ml-5 h-full md:flex md:flex-col lg:w-7/12 xl:w-3/5 text-center items-center hidden">
            <p className="text-white m-auto w-full text-md lg:text-lg">
              {project.description}
            </p>
          </div>
          {project.showDescription ? (
            <div className="w-full p-5 m-auto mt-5 md:hidden text-center border border-white rounded-md">
              <p className="text-white m-auto w-full text-md lg:text-lg">
{project.description}
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div
          className="w-full h-full flex flex-col md:flex-row items-center p-3 rounded-md"
          id={project.id}
        >
          <div className="w-2/3 mr-5 h-full md:flex md:flex-col text-center items-center hidden">
            <p className="text-white m-auto w-full text-md lg:text-lg">
            {project.description}
            </p>
          </div>
          <div className="w-64 h-64 lg:w-80 lg:h-80 flex items-center justify-center rounded-full bg-white m-auto flip lg:hover:none">
            <div className="flip-content">
              <div className="flip-front flex items-center justify-center">
                {project.getIcon()}
              </div>
              <div className="flip-back">
                {project.getBackContent(toggleProjectVisibility)}
              </div>
            </div>
          </div>
          {project.showDescription ? (
            <div className="w-full p-5 m-auto mt-5 md:hidden text-center border border-white rounded-md">
              <p className="text-white m-auto w-full text-md lg:text-lg">
              {project.description}
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
}
