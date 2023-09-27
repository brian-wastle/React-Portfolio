// Bringing in the required import from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <div id='nav-container'>
      <Navbar
        links={[
          <NavLink key={1} to="/">
            Home
          </NavLink>,
          <NavLink key={2} className="indiv-links" to="/Portfolio">
            Portfolio
          </NavLink>,
          <NavLink key={3} className="indiv-links" to="/Contact">
            Contact
          </NavLink>,
          <NavLink key={4} className="indiv-links" to="/Resume">
            Resume
          </NavLink>,
        ]}
      />
    </div>
  );
}
