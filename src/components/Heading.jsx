import React from "react";
import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <nav>
      <div className="nav-wrapper" style={{ padding: "0 1rem" }}>
        <a href="#" className="brand-logo">
          Channy
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/add">Add Todo</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Heading;

// CHANNY'S! DO NOT COPY!
