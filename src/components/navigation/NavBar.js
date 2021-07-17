import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

export default function NavBar() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNavBar = (e) => {
    let backgroundContent = document.querySelectorAll(".content");
    if (!isNavActive) {
      backgroundContent.forEach((content) => {
        content.classList.add("dim");
      });
      setIsNavActive(true);
    } else {
      backgroundContent.forEach((content) => {
        content.classList.remove("dim");
      });
      setIsNavActive(false);
    }
  };

  const renderContent = () => {
    return (
      <div className="w-full min-h-screen bg-transparent flex items-center justify-center">
        <div className="h-2/3 flex flex-col items-center justify-around">
          <button className="bg-transparent text-white text-center text-4xl font-bold mb-10 mt-10 border-b-2 border-opacity-0 delay-75 duration-200 ease-in-out hover:border-opactity-100 hover:border-gray-100 hover:text-gray-100">
            <Link
              to="about_me_section"
              smooth={true}
              onClick={(e) => toggleNavBar(e)}
            >
              About Me
            </Link>
          </button>
          <button className="bg-transparent text-white text-center text-4xl font-bold mb-10 mt-10 border-b-2 border-opacity-0 delay-100 duration-200 ease-in-out hover:border-opactity-100 hover:border-gray-100 hover:text-gray-100">
            <Link
              to="projects_section"
              smooth={true}
              onClick={(e) => toggleNavBar(e)}
            >
              Projects
            </Link>
          </button>
          <button className="bg-transparent text-white text-center text-4xl font-bold mb-10 mt-10 border-b-2 border-opacity-0 delay-100 duration-200 ease-in-out hover:border-opactity-100 hover:border-gray-100 hover:text-gray-100">
            <Link
              to="skills_section"
              smooth={true}
              onClick={(e) => toggleNavBar(e)}
            >
              Skills
            </Link>
          </button>
          <button className="bg-transparent text-white text-center text-4xl font-bold mb-10 mt-10 border-b-2 border-opacity-0 delay-100 duration-200 ease-in-out hover:border-opactity-100 hover:border-gray-100 hover:text-gray-100">
            <Link
              to="contact_section"
              smooth={true}
              onClick={(e) => toggleNavBar(e)}
            >
              Contact
            </Link>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full z-50 fixed nav-content">
      <div className="w-full p-3 flex items-start fixed left-0 top-0">
        {!isNavActive ? (
          <span
            className="text-white cursor-pointer"
            onClick={(e) => toggleNavBar(e)}
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </span>
        ) : (
          <span
            className="text-white cursor-pointer"
            onClick={(e) => toggleNavBar(e)}
          >
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </span>
        )}
      </div>
      {isNavActive ? renderContent() : <></>}
    </div>
  );
}
