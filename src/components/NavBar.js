import React, {Component} from 'react';
//import GithubIcon from '../images/github-icon.png';
//import LinkedinIcon from '../images/linkedin-icon.png';
//import EmailIcon from '../images/email-icon.png';
import '../componentStyles/NavBar.css';
import Scroll from 'react-scroll';

class NavBar extends Component {


    handleToggle = () => this.setState({open: !this.state.open})

    render(){
        let Link = Scroll.Link;
        return(
            <section className="Nav">
            <div className="header-nav">
                <nav className="nav-menu">
                <Link to="work"
                            offset={-100}
                            spy={true}
                            smooth={true}
                            duration={700}>
                            Work 
                        </Link>
                        <Link to="about"
                            offset={-100}
                            spy={true}
                            smooth={true}
                            duration={700}>
                            About
                        </Link>
                        <Link to="contact"
                            offset={-100}
                            spy={true}
                            smooth={true}
                            duration={700}>
                            Contact
                        </Link>
                </nav>

         
            </div>
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