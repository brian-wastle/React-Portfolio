import { motion } from "framer-motion";

export default function Nav({ links }) {
  return (
    <nav>
      <div className="nav-container">
        <p className="nav-title">
          Brian Wastle
        </p>
        <div className="nav-links">
          <ul>
            {links.map((link) => link)}
          </ul>
        </div>
      </div>
    </nav>
  );
}
