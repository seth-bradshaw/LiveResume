import React from "react";
import "./skillcard.css";

export default function SkillCard(props) {
  const { skill } = props;
//   console.log(skill)
  return (
    <div className="flip h-64 w-64 rounded-md mt-10 bg-gray-100 ml-5 lg:ml-10 xl:ml-15 shadow-2xl">
      <div className="flip-content rounded-md">
        <div className="flip-front flex flex-col items-center justify-around xl:justify-center pt-3">
          {skill.getIcon()}
          <span className="text-gray-800 text-2xl font-bold mt-3">{skill.title}</span>
        </div>
        <div className="flip-back bg-gray-200 rounded-md h-64 w-64">
          {skill.getStats()}
        </div>
      </div>
    </div>
  );
}
