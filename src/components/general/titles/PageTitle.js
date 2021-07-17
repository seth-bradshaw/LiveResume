import React from "react";

export default function PageTitle(props) {
  const { title } = props;
  return (
    <div className="sm:text-7xl text-white font-semibold h-full text-center md:mb-16 text-5xl">
      <h2>{title}</h2>
    </div>
  );
}
