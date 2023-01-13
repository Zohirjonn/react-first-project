import React from "react";
import "./Nav.scss";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const Nav1 = () => {
  return (
    <div className="nav">
      <Fade top>
        <nav>
          <Link to="/">Home</Link>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/backend">Malumotlar</Link>
            </li>
            <li>
              <Link to="/chart">Statistika</Link>
            </li>
          </ul>
        </nav>
      </Fade>
    </div>
  );
};

export default Nav1;
