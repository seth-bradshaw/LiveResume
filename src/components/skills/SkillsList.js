import React from "react";
import SkillCard from "./SkillCard";

export default function SkillsList(props) {
  const { list } = props;

  return (
    <div className="w-full">
      <div className="w-full px-10 xl:w-5/6 2xl:w-4/6 m-auto flex flex-wrap justify-center">
        {list.map((skill) => {
          return <SkillCard skill={skill} key={skill.id} />;
        })}
      </div>
    </div>
  );
}
