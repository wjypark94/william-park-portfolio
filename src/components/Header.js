import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import '../componentStyles/Header.css';


class Header extends Component {
    render(){
        return(
            <div className="header-container">
                <div className="header">
                    <Fade bottom>
                        <h2 className="site-title">Will Park</h2>
                    </Fade>
                    <Fade left>
                        <h1 className="site-description">Full Stack Web Developer</h1>
                    </Fade>
                    <Fade left>
                        <div className="header-links">
                            <a href="mailto:wjypark94@gmail.com">
                                <i className="icon fa fa-envelope"></i>
                            </a>
                            <a href="https://github.com/wjypark94">
                                <i className="icon fa fa-github-alt" aria-hidden="true"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/wjypark">
                                <i className="icon fa fa-linkedin" aria-hidden="true"></i>
                            </a>
                        </div>
                    </Fade>
         
                </div>
                <div className="arrow-wrapper">
                    <Fade bottom>
                        <i className="fa fa-chevron-down smooth-container" aria-hidden="true"></i>
                    </Fade>
                </div>
            </div>
        )
    }
}

export default Header;