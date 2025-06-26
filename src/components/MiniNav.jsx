export default function MiniNav({ category, setCategory }) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark mybg-dark mynav"
      aria-label="Tenth navbar example"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample08"
          aria-controls="navbarsExample08"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample08"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={`mynav-link ${category === 'Business' && 'myactive'}`}
                aria-current="page"
                href="#"
                onClick={() => setCategory('Business')}
              >
                Business
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`mynav-link ${category === 'Technology' && 'myactive'}`}
                href="#"
                onClick={() => setCategory('Technology')}
              >
                Technology
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`mynav-link ${category === 'Science' && 'myactive'}`}
                href="#"
                onClick={() => setCategory('Science')}
              >
                Science
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`mynav-link ${category === 'Health' && 'myactive'}`}
                href="#"
                onClick={() => setCategory('Health')}
              >
                Health
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`mynav-link ${category === 'Sports' && 'myactive'}`}
                href="#"
                onClick={() => setCategory('Sports')}
              >
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`mynav-link ${category === 'Entertainment' && 'myactive'}`}
                href="#"
                onClick={() => setCategory('Entertainment')}
              >
                Entertainment
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
