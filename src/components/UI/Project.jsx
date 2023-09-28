import { motion } from "framer-motion";
import bgImage from '../../assets/images/projects/code-bg.jpg'
import repoImage from '../../assets/images/github-mark-white.png'

export default function Project({ project: { name, description, link, repo } }) {
  
    return (
        <div >
            <motion.div
                className="test-container"
                whileHover={{ scale: 0.98 }}
                whileTap={{ scale: 1.0,  borderRadius: "100%" }}
            >  
                <div className="card-text-container">
                    <div className="card-text">
                        <h2 className="project-h2"><a className="project-link" href={link}>{name}</a></h2>
                        <h3>{description}</h3>
                        <a href={repo} target="_blank" rel="noopener noreferrer">
                            <img className="repo-image" src={repoImage} alt="github logo" />
                        </a>
                    </div>
                </div>

            <img src={bgImage} />
            </motion.div>
        </div>
    );
  }