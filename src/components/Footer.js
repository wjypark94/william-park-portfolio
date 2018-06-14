import React, {Component} from 'react';
import '../componentStyles/Footer.css';
import Fade from 'react-reveal/Fade';

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <Fade>
                <div className="footer-links">
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

                <p className="copyright">
                    <i className="copyright-icon fa fa-copyright"></i>
                    2018 William Park 
                </p>
                </Fade>
            </div>
        )
    }
}

export default Footer;