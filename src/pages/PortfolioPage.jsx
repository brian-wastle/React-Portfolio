import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ListItem from '../components/UI/ListItem';
import Project from '../components/UI/Project';
import projectsData from '../utils/projects.json'

export default function PortfolioPage() {


  return (
    <>
    <h3 className="page-title portfolio-title">Portfolio</h3>
    <div>
      <ul className="grid-container project-list">
        {projectsData.map((project) => (
          <ListItem className="grid-div" key={project.id}>
            <Project project={project} />
          </ListItem>
        ))}
      </ul>
    </div>
    </>
  );
}
