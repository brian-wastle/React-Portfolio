import ghLogo from '../assets/images/github-mark-white.png'
import liLogo from '../assets/images/In-White-96.png'
import stackLogo from '../assets/images/stacklogo.png'

export default function Footer() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <footer>
      <ul className="footer-container">
        <li><a href="https://www.github.com/brian-wastle" className="indiv-socials" target="_blank" rel="noopener noreferrer"><img src={ghLogo} alt="Github Logo" /></a></li>
        <li><a href="https://www.linkedin.com/in/brian-wastle-988a15126/" className="indiv-socials" target="_blank" rel="noopener noreferrer"><img src={liLogo} alt="LinkedIn Logo" /></a></li>
        <li><a href="https://www.stackoverflow.com/users/22133760/brian-wastle" className="indiv-socials" target="_blank" rel="noopener noreferrer"><img src={stackLogo} alt="Stack Overflow Logo" /></a></li>
      </ul>
    </footer>
  );
}
