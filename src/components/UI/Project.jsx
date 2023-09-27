import bgImage from '../../assets/images/projects/code-bg.jpg'

export default function Project({ project: { name, description, link, repo } }) {
  
    return (
      <>
        <div className='grid-container'>
            <img src={bgImage} alt="project screenshot" />
            <h2>{name}</h2>
            <h5>{description}</h5>
            <a href={link}>{link}</a>
        </div>
      </>
    );
  }