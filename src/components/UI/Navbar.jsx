export default function Nav({ links }) {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-title">
          Brian Wastle
        </div>
        <div className="nav-links">
          <ul>
            {links.map((link) => link)}
          </ul>
        </div>
      </div>
    </nav>
  );
}
