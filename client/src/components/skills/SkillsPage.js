import React from "react";
import PageTitle from "../general/titles/PageTitle";
import SkillsList from "./SkillsList";
import { PolarArea } from 'react-chartjs-2';

export default function SkillsPage() {
  const options = {
    responsive: true,
    scale: {
      ticks: { 
        beginAtZero: true,
        stepSize: 1 
      },
      max: 5
    },
  };

  const getData = (skillData, skillLabel) => {
    const data = {
      labels: ['Experience (years)', 'Proficency', 'Enjoyment'],
      datasets: [
        {
          label: skillLabel,
          data: skillData,
          backgroundColor: [
            'rgba(255, 159, 64, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
          ],
          borderWidth: 1,
        },
      ],
    };
    return data;
  }

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
      getStats: () => {
        return (
          <div className="flex flex-col justify-items-center rounded-md p-3 h-full">
            <div className="flex h-5/6 w-5/6 m-auto">
              <PolarArea data={() => getData([2, 3, 4], "Javascript")} options={options} className="bg-white h-full w-full"/>
            </div>
          </div>
        )
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
        getStats: () => {
          return (
            <div className="flex flex-col justify-items-center rounded-md p-3 h-full">
            <div className="flex h-5/6 w-5/6 m-auto">
              <PolarArea data={() => getData([.75, 2.5, 5], "Java")} options={options} className="bg-white h-full w-full"/>
            </div>
          </div>
          )
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
        getStats: () => {
          return (
          <div className="flex flex-col justify-items-center rounded-md p-3 h-full">
            <div className="flex h-5/6 w-5/6 m-auto">
              <PolarArea data={() => getData([.75, 2, 4], "Python")} options={options} className="bg-white h-full w-full"/>
            </div>
          </div>
          )
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
        getStats: () => {
          return (
          <div className="flex flex-col justify-items-center rounded-md p-3 h-full">
            <div className="flex h-5/6 w-5/6 m-auto">
              <PolarArea data={() => getData([1, 3, 5], "React")} options={options} className="bg-white h-full w-full"/>
            </div>
          </div>
          )
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
        getStats: () => {
          return (
          <div className="flex flex-col justify-items-center rounded-md p-3 h-full">
            <div className="flex h-5/6 w-5/6 m-auto">
              <PolarArea data={() => getData([2, 3, 3], "Html5")} options={options} className="bg-white h-full w-full"/>
            </div>
          </div>
          )
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
        getStats: () => {
          return (
            <div className="flex flex-col justify-items-center rounded-md p-3 h-full">
            <div className="flex h-5/6 w-5/6 m-auto">
              <PolarArea data={() => getData([.5, 1.5, 4], "Linux")} options={options} className="bg-white h-full w-full"/>
            </div>
          </div>
          )
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
