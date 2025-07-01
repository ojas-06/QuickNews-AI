import { News } from '../store/news-api-store';
import { Link } from 'react-router-dom';
import { useRef, useState, useContext } from 'react';

export default function Header() {
  const { setCategory } = useContext(News);
  const searchField = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="text-bg-dark fixed-top"
      style={{ height: '64px', zIndex: 1030 }}
    >
      <div className="container h-100 d-flex align-items-center justify-content-between">
        <span className="fs-3 text-nowrap">
          N<span className="fs-5">EWS</span>.AI
        </span>
        <button
          className="btn btn-outline-light d-lg-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          style={{ height: '38px' }}
        >
          ☰
        </button>
        <ul className="nav d-none d-lg-flex mb-0">
          <li>
            <Link to="/" className="nav-link px-2 text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/summaries" className="nav-link px-2 text-white">
              Summaries
            </Link>
          </li>
        </ul>
        <div className="d-flex align-items-center gap-2">
          <form className="mb-0" role="search" style={{ width: '180px' }}>
            <input
              type="search"
              className="form-control form-control-dark text-bg-dark"
              aria-label="Search"
              name="search"
              ref={searchField}
              autoComplete="off"
              style={{ height: '38px' }}
            />
          </form>
          <button
            type="button"
            className="btn btn-outline-light"
            style={{ height: '38px' }}
            onClick={() => setCategory(searchField.current.value)}
          >
            Search
          </button>
        </div>
      </div>
      {menuOpen && (
        <div
          className="bg-dark d-lg-none position-absolute w-100 px-3 py-2"
          style={{ top: '64px' }}
        >
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link text-white"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/summaries"
                className="nav-link text-white"
                onClick={() => setMenuOpen(false)}
              >
                Summaries
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
