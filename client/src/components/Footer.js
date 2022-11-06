import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <div className="mt-5 py-5 px-4 footer-font">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-md-3 d-flex justify-content-start align-items-start flex-column">
            <h5 className="my-2">About</h5>
            <p className="text-small text-start px-0 text-secondary">
              Render The Metrics: Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>

          <div className="col-6 col-md-3 d-flex justify-content-start align-items-md-start flex-column">
            <h5 className="my-2">Documentation</h5>
            <ul className="text-small text-start px-0">
              <li>
                <a className="link-secondary" href="/">
                  Cool stuff
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/">
                  Random feature
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/">
                  Team feature
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3 d-flex justify-content-start align-items-start flex-column">
            <h5 className="my-2">More Info</h5>
            <ul className="text-small text-start px-0">
              <li>
                <a className="link-secondary" href="/">
                  Cool stuff
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/">
                  Random feature
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/">
                  Team feature
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3 d-flex justify-content-start align-items-start flex-column">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="d-block mb-2"
              role="img"
              viewBox="0 0 24 24"
            >
              <title>Product</title>
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path>
            </svg>
            <small className="d-block mb-3 text-muted">© 2022</small>
          </div>
        </div>
      </div>
    </div>
  );
}
