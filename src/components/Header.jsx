import { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { News } from '../store/news-api-store';

export default function Header() {
  const { setCategory } = useContext(News);
  const searchField = useRef(null);
  return (
    <header className="p-3 text-bg-dark fixed">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <span className="fs-3 me-5">
            N<span className="fs-5">EWS</span>.AI
          </span>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
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
          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control form-control-dark text-bg-dark"
              aria-label="Search"
              name="search"
              ref={searchField}
              autocomplete="off"
            />
          </form>
          <div className="text-end">
            <button
              type="button"
              className="btn btn-outline-light me-2"
              onClick={() => setCategory(searchField.current.value)}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
