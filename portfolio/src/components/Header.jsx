import React from 'react';

const Header = () => {
  return (
    <header className="p-3 bg-light">
      <nav className="navbar navbar-expand-md ">
        {/* Brand Name */}
        <a className="navbar-brand" href="#">K Elanthiran</a>

        {/* Hamburger toggle button for mobile screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#About">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Resume">Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
