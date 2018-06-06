import React, {Component} from 'react';
import GithubIcon from '../images/github-icon.png';
import LinkedinIcon from '../images/linkedin-icon.png';
import EmailIcon from '../images/email-icon.png';
import '../componentStyles/NavBar.css';
import { slide as Menu } from 'react-burger-menu';


class NavBar extends Component {
    render(){
  
        return(
            <section className="Nav">
            <Menu width={'100%'}>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="work" className="menu-item" href="/about">Work</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a id="resume" className="menu-item" href="/resume">Resume</a>
            </Menu>
            <div className="header-nav">
                <nav className="nav-menu">
                    <a id="about" className="nav-item" href="/about">About</a>
                    <a id="work" className="nav-item" href="/about">Work</a>
                    <a id="contact" className="nav-item" href="/contact">Contact</a>
                    <a id="resume" className="nav-item" href="/resume">Resume</a>
                </nav>

                <div className="social-links">
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
            </div>
            </section>
        )
    }
}

export default NavBar;