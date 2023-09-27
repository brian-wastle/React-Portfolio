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
      <ul>
        {projectsData.map((project) => (
          <ListItem key={project.id}>
            <Project project={project} />
          </ListItem>
        ))}
      </ul>
    </div>
    </>
  );
}
