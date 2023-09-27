import bgImage from '../../assets/images/projects/code-bg.jpg'

export default function Project({ project: { name, description, link, repo } }) {
  
    return (
        <div>
            <div className="card-text-container">
                <div className="card-text">
                    <h2 className="project-h2">{name}</h2>
                    <h5>{description}</h5>
                    <a href={link}>{link}</a>
                </div>
            </div>
            <img src={bgImage} alt="project screenshot" />
        </div>
    );
  }