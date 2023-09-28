import pdfResume from '../assets/pdf/Brian-Wastle-Resume.pdf';

export default function ResumePage() {
  return (
    <div>
      <h3 className="page-title resume-title">Resume</h3>
      <div className="resume-container">
        <div>
              <a className="resume-heading" href = {pdfResume} target ="_blank" >Click Here to Download Resume</a>    
        </div>
        <div>
          <h4 className="resume-heading" >Front-End Proficiencies:</h4>
        </div>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Handlebars</li>
        </ul>
        <div>
          <h4 className="resume-heading" >Back-End Proficiencies:</h4>
        </div>
        <ul>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST API</li>
          <li>GraphQL</li>
        </ul>
        <br />
      </div>
    </div>
  );
}
