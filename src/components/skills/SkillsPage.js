import React from "react";
import PageTitle from "../general/titles/PageTitle";
import SkillsList from "./SkillsList";

export default function SkillsPage() {
  const options = {
    responsive: true,
    scale: {
      ticks: {
        beginAtZero: true,
        stepSize: 1,
      },
      max: 5,
    },
  };

  const getData = (skillData, skillLabel) => {
    const data = {
      labels: ["Experience (years)", "Proficency", "Enjoyment"],
      datasets: [
        {
          label: skillLabel,
          data: skillData,
          backgroundColor: [
            "rgba(255, 159, 64, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
          ],
          borderWidth: 1,
        },
      ],
    };
    return data;
  };

  const skills = [
    {
      id: 99,
      getIcon: () => {
        return (
          <span className="text-yellow-300">
            <i className="fab fa-js fa-9x"></i>
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
            <i className="fab fa-java fa-9x"></i>
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
            <i className="fab fa-python fa-9x"></i>
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
            <i className="fab fa-react fa-9x"></i>
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
            <i className="fab fa-html5 fa-9x"></i>
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
            <i className="fab fa-linux fa-9x"></i>
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
