import React, {Component} from 'react';

import '../componentStyles/NavBar.css';
import Scroll from 'react-scroll';
import Fade from 'react-reveal/Fade';

class NavBar extends Component {

    render(){
        let Link = Scroll.Link;
        return(
            <section className="Nav">
            <Fade top>
            <div className="nav-name">
                <a onClick={()=> window.location="/"} className="home-name"> WP </a>
            </div>
            </Fade>
            <Fade top>
            <div className="header-nav">
                <nav className="nav-menu">
                    <Link to="about"
                        offset={-40}
                        spy={true}
                        smooth={true}
                        duration={700}
                        className="nav-link">
                        About
                    </Link>
                    <Link to="skills"
                        offset={10}
                        spy={true}
                        smooth={true}
                        duration={700}
                        className="nav-link">
                        Skills
                    </Link>
                    <Link to="work"
                            offset={20}
                            spy={true}
                            smooth={true}
                            duration={700}
                            className="nav-link">
                            Work 
                    </Link>
                    
                    <Link to="contact"
                            offset={-80}
                            spy={true}
                            smooth={true}
                            duration={700}
                            className="nav-link">
                            Contact
                    </Link>
                </nav>

         
            </div>
            </Fade>
            </section>
        )
    }
}

export default NavBar;

      /* <div className="social-links">
                    <a className="social-icon" href="https://github.com/wjypark94" target="_blank" rel="noopener noreferrer">
                        <img src={GithubIcon} alt="github-icon"/>
                    </a>

                    <a className="social-icon" href="https://www.linkedin.com/in/wjypark/" target="_blank" rel="noopener noreferrer"> 
                        <img src={LinkedinIcon} alt="linkedin-icon"/> 
                    </a>

                    <a className="social-icon" href="mailto:wjypark94@gmail.com">
                        <img src={EmailIcon} alt="email-icon"/>
                    </a>
                    
                </div>
                */