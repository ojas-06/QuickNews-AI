import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="p-3 text-bg-dark fixed">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <span className="fs-4 me-5">QuickNews AI</span>
          <ul className="nav col-12 col-lg-auto me-lg-auto ms-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/summaries" className="nav-link px-2 text-white">
                My Summaries
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
            />
          </form>
          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">
              Search
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
