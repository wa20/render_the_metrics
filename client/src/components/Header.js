import React from "react";
import logo from "../assets/orange-logo_03.jpg";
import "./style.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light py-2 pb-5 orange-background">
      <div className="container-fluid">
        <a className="navbar-brand" 
        href="/"
        >
          <img
            src={logo}
            alt=""
            width="60%"
            className="d-inline-block align-text-top"
          />
        </a>

        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-4">
            <li className="nav-item ">
              <a
                className="nav-link text-white active fw-bold"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white " aria-current="page" 
              href="/"
              >
                Time
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" 
              href="/"
              >
                Metrics
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
