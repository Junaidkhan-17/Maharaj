import { Link, NavLink } from "react-router-dom";
import "./header.css";
import { FaWhatsapp } from "react-icons/fa";

function Header() {
  const navClass = ({ isActive }) =>
    `nav-link${isActive ? " active" : ""}`;

  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container">
        <Link className="navbar-brand brand-logo" to="/" aria-label="Go to home page">
          <span className="brand-main">Shri Ganesh Shastri Ji Maharaj</span>
          <span className="brand-sub">Uttarakhand</span>
        </Link>

        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon custom-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto nav-menu">
            <li className="nav-item">
              <NavLink end to="/" className={navClass}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={navClass}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={navClass}>
                Contact
              </NavLink>
            </li>
            <a
            href="https://wa.me/919930375277"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn btn-success d-flex align-items-center gap-2"
          >
            <FaWhatsapp  size={40} />
          </a>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
