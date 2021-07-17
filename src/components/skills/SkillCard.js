import React from "react";

export default function SkillCard(props) {
  const { skill } = props;

  return (
    <div className={`group h-64 w-64 rounded-md mt-10 bg-gray-100 ml-5 lg:ml-10 xl:ml-15 shadow-2xl flex flex-col items-center justify-center transform transition ease-in-out hover:scale-110`}>
      <div className="rounded-md">
        <div className="flex flex-col items-center justify-center pt-3">
          <div>
          {skill.getIcon()}
          </div>
          <div>
            <span className="text-gray-800 text-2xl font-bold mt-3">{skill.title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
