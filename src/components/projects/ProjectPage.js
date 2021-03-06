import React, { useState } from "react";
import PageTitle from "../general/titles/PageTitle";
import ProjectList from "./ProjectList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink, faChevronDown, faBug, faListAlt } from "@fortawesome/free-solid-svg-icons";

const initialState = [
  {
    id: 1,
    getIcon: () => {
      return (
        // <img className="w-full h-full rounded-full z-0" src="Namaste_SS.png" alt="Namaste site screenshot"></img>
        <div className="flex h-4/5 w-4/5 p-2 rounded-full items-center justify-center bg-yellow-300">
          <p className="text-4xl text-white font-bold">Namaste</p>
        </div>
      );
    },
    getBackContent: (toggleDescription) => {
      return (
        <div className="flex h-full w-full p-2 pt-5 rounded-full flex-col items-center justify-center bg-gray-100">
          <p className="text-4xl text-gray-800 font-bold my-3">Namaste:</p>
          <div className="flex justify-center items-center flex-col">
            <div className="text-md text-gray-800">
              <p>Front End (Javascript, React.js, Redux, Bootstrap)</p>
              <p>API (Java, Spring Boot)</p>
              <p>Data Base (PostgreSQL)</p>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="p-2 text-gray-800">
              <a
                href="https://github.com/seth-bradshaw/Namaste"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLink} size="lg" className="cursor-pointer" />
              </a>
            </span>
            <span className="p-2 text-gray-800">
              <a
                href="https://github.com/seth-bradshaw/Namaste"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" className="cursor-pointer" />
              </a>
            </span>
            <span className="p-2 text-gray-800 md:hidden">
              <FontAwesomeIcon icon={faChevronDown} size="lg" className="cursor-pointer" onClick={() => toggleDescription(1)} />
            </span>
          </div>
        </div>
      );
    },
    title: "one",
    isVisible: true,
    isLeft: true,
    showDescription: false,
  },
  {
    id: 2,
    getIcon: () => {
      return (
        <div className="flex h-5/6 w-5/6 p-2 rounded-full items-center justify-center bg-gray-900 border-gray-800">
          <FontAwesomeIcon icon={faBug} size="8x" className="text-white" />
        </div>
      );
    },
    getBackContent: (toggleDescription) => {
      return (
        <div className="flex h-full w-full p-2 pt-5 rounded-full flex-col items-center justify-center bg-gray-100">
          <p className="text-4xl text-gray-800 font-bold my-3">Bug Tracker:</p>
          <div className="flex justify-center items-center flex-col">
            <div className="text-md text-gray-800">
              <p>Front End (Javascript, React.js, Redux, Bootstrap)</p>
              <p>API (Java, Spring Boot)</p>
              <p>Data Base (PostgreSQL)</p>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="p-2 text-gray-800">
              <a
                href="https://github.com/SethAndChris/BugTracker"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLink} size="lg" className="cursor-pointer" />
              </a>
            </span>
            <span className="p-2 text-gray-800">
              <a
                href="https://github.com/SethAndChris/BugTracker"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" className="cursor-pointer" />
              </a>
            </span>
            <span className="p-2 text-gray-800 md:hidden">
              <FontAwesomeIcon icon={faChevronDown} size="lg" className="cursor-pointer" onClick={() => toggleDescription(2)} />
            </span>
          </div>
        </div>
      );
    },
    title: "two",
    isVisible: true,
    isLeft: false,
    showDescription: false,
  },
  {
    id: 3,
    getIcon: () => {
      return (
        <div className="flex h-5/6 w-5/6 p-2 rounded-full items-center justify-center bg-blue-600">
          <FontAwesomeIcon icon={faListAlt} size="8x" className="text-white"/>
        </div>
      );
    },
    getBackContent: (toggleDescription) => {
      return (
        <div className="flex h-full w-full p-2 pt-5 rounded-full flex-col items-center justify-center bg-gray-100">
          <p className="text-4xl text-gray-800 font-bold my-3">Todo List:</p>
          <div className="flex justify-center items-center flex-col">
            <div className="text-md text-gray-800">
              <p>Front End (Javascript, React.js, Tailwind)</p>
              <p>API (Python, Django)</p>
              <p>Data Base (Sqlite3)</p>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="p-2 text-gray-800">
              <a
                href="https://github.com/SethAndChris/BugTracker"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLink} size="lg" className="cursor-pointer" />
              </a>
            </span>
            <span className="p-2 text-gray-800">
              <a
                href="https://github.com/SethAndChris/BugTracker"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" className="cursor-pointer" />
              </a>
            </span>
            <span className="p-2 text-gray-800 md:hidden">
              <FontAwesomeIcon icon={faChevronDown} size="lg" className="cursor-pointer" onClick={() => toggleDescription(3)} />
            </span>
          </div>
        </div>
      );
    },
    title: "three",
    isVisible: true,
    isLeft: true,
    showDescription: false,
  },
];

export default function ProjectPage() {
  const [projects, setProjects] = useState(initialState);

  const toggleProjectVisibility = (id) => {
    const newProjects = projects.map((project) => {
      if (project.id === id) {
        project.showDescription = !project.showDescription;
      }
      return project;
    });
    setProjects(newProjects);
  };

  return (
    <div className="content pt-5 h-full mb-12" id="projects_section">
      <PageTitle title="My Projects" />
      <ProjectList
        list={projects}
        toggleProjectVisibility={toggleProjectVisibility}
      />
    </div>
  );
}
