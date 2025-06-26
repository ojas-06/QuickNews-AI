import { useContext } from 'react';
import { News } from '../store/news-api-store';

export default function MiniNav() {
  const { category, setCategory,setLoading } = useContext(News);
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
                className={`mynav-link ${category === 'business' && 'myactive'}`}
                aria-current="page"
                href="#"
                onClick={() => {setLoading(true) ; setCategory('business'); }}
              >
                Business
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`mynav-link ${category === 'technology' && 'myactive'}`}
                href="#"
              onClick={() => {setLoading(true);setCategory('technology')}}
              >
                Technology
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`mynav-link ${category === 'science' && 'myactive'}`}
                href="#"
                onClick={() => {setLoading(true);setCategory('science')}}
              >
                Science
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`mynav-link ${category === 'health' && 'myactive'}`}
                href="#"
                onClick={() => {setLoading(true);setCategory('health')}}
              >
                Health
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`mynav-link ${category === 'sports' && 'myactive'}`}
                href="#"
                onClick={() => {setLoading(true);setCategory('sports')}}
              >
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`mynav-link ${category === 'entertainment' && 'myactive'}`}
                href="#"
                onClick={() => {setLoading(true);setCategory('entertainment')}}
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
