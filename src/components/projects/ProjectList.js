import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectList(props) {
    const {list, toggleProjectVisibility} = props;

    return (
        <div className="flex flex-col justify-center items-center">
            {
               list.map((project) => {
                   return <ProjectCard project={project} toggleProjectVisibility={toggleProjectVisibility} key={project.id}/>
               }) 
            }
        </div>
    )
}
