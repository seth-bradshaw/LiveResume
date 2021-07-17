import React from "react";
import PageTitle from "../general/titles/PageTitle";
import SkillsList from "./SkillsList";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faJs, faJava, faPython, faReact, faHtml5, faLinux } from '@fortawesome/free-brands-svg-icons'

export default function SkillsPage() {
  const skills = [
    {
      id: 99,
      getIcon: () => {
        return (
          <span className="text-yellow-300">
              <FontAwesomeIcon icon={faJs} size="9x" />
          </span>
        );
      },
      title: "Javascript",
    },
    {
      id: 98,
      getIcon: () => {
        return (
          <span className="text-red-600">
            <FontAwesomeIcon icon={faJava} size="9x" />
          </span>
        );
      },
      title: "Java",
    },
    {
      id: 97,
      getIcon: () => {
        return (
          <span className="text-blue-600">
            <FontAwesomeIcon icon={faPython} size="9x" />
          </span>
        );
      },
      title: "Python",
    },
    {
      id: 96,
      getIcon: () => {
        return (
          <span className="text-purple-600">
            <FontAwesomeIcon icon={faReact} size="9x" />
          </span>
        );
      },
      title: "React",
    },
    {
      id: 95,
      getIcon: () => {
        return (
          <span className="text-yellow-600">
            <FontAwesomeIcon icon={faHtml5} size="9x" />
          </span>
        );
      },
      title: "HTML",
    },
    {
      id: 94,
      getIcon: () => {
        return (
          <span className="text-green-600">
            <FontAwesomeIcon icon={faLinux} size="9x" />
          </span>
        );
      },
      title: "Linux",
    },
  ];

  return (
    <div className="min-h-full mb-16 content" id="skills_section">
      <PageTitle title="Languages and Skills" />
      <SkillsList list={skills} />
    </div>
  );
}
