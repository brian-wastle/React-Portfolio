import pdfResume from '../assets/pdf/Brian-Wastle-Resume.pdf';

export default function ResumePage() {
  return (
    <div className="resume-container">
          <a href = {pdfResume} target ="_blank" >Click Here to Download Resume</a>
        </div>
  );
}
