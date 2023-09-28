import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from "framer-motion";
import ListItem from '../components/UI/ListItem';
import Project from '../components/UI/Project';
import projectsData from '../utils/projects.json'

export default function PortfolioPage() {

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <>
    <h3 className="page-title portfolio-title">Portfolio</h3>
    <div>
      <motion.ul 
        className="container grid-container project-list"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {projectsData.map((project) => (
          <ListItem className="item grid-div" variants={item} key={project.id}>
            <Project project={project} />
          </ListItem>
        ))}
      </motion.ul>
    </div>
    </>
  );
}
