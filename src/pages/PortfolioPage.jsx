import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ListItem from '../components/UI/ListItem';
import Project from '../components/UI/Project';
import projectsData from '../utils/projects.json'

export default function PortfolioPage() {


  return (
    <>
    {console.log(projectsData)}
    <div>
      <ul className="grid-container project-list">
        {projectsData.map((project) => (
          <ListItem key={project.id}>
            <Project className="grid-item" project={project} />
          </ListItem>
        ))}
      </ul>
    </div>
    </>
  );
}
