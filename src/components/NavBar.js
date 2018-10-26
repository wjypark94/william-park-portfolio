import React, { Component } from "react";

import "../componentStyles/NavBar.css";
import Scroll from "react-scroll";
import Fade from "react-reveal/Fade";

class NavBar extends Component {
  render() {
    let Link = Scroll.Link;
    return (
      <section className="Nav">
        <Fade top>
          <div className="nav-name">
            <a onClick={() => (window.location = "/")} className="home-name">
              {" "}
              WP{" "}
            </a>
          </div>
        </Fade>
        <Fade top>
          <div className="header-nav">
            <nav className="nav-menu">
              <Link
                to="about"
                offset={-40}
                spy={true}
                smooth={true}
                duration={700}
                className="nav-link"
              >
                About
              </Link>
              <Link
                to="skills"
                offset={10}
                spy={true}
                smooth={true}
                duration={700}
                className="nav-link"
              >
                Skills
              </Link>
              <Link
                to="work"
                offset={20}
                spy={true}
                smooth={true}
                duration={700}
                className="nav-link"
              >
                Work
              </Link>

              <Link
                to="contact"
                offset={-80}
                spy={true}
                smooth={true}
                duration={700}
                className="nav-link"
              >
                Contact
              </Link>
            </nav>
          </div>
        </Fade>
      </section>
    );
  }
}

export default NavBar;
