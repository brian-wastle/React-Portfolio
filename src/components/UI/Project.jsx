import bgImage from '../../assets/images/projects/code-bg.jpg'
import repoImage from '../../assets/images/github-mark-white.png'

export default function Project({ project: { name, description, link, repo } }) {
  
    return (
        <div >
            <div className="card-text-container">
                <div className="card-text">
                    <h2 className="project-h2"><a className="project-link" href={link}>{name}</a></h2>
                    <h3>{description}</h3>
                    <a href={repo} target="_blank" rel="noopener noreferrer"><img className="repo-image" src={repoImage} alt="github logo" /></a>
                </div>
            </div>
            <img src={bgImage} />
        </div>
    );
  }