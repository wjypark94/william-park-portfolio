import React, {Component} from 'react';
import GithubIcon from '../images/github-icon.png';
import LinkedinIcon from '../images/linkedin-icon.png';
import EmailIcon from '../images/email-icon.png';
import '../componentStyles/Contact.css';

class Contact extends Component {
    
    render(){
        return(
            <div id="contact" className="contact">
                <h2 className="bottomBarWhite">Contact</h2>
                <div className="contact-content">
                    <a href="mailto:wjypark94@gmail.com"><h4>wjypark94@gmail.com</h4></a>
                    <div className="social-links">
                        <a className="social-icon" href="https://github.com/wjypark94" target="_blank" rel="noopener noreferrer">
                            <img src={ GithubIcon } alt="github-icon"/>
                        </a>
                        <a className="social-icon" href="https://www.linkedin.com/in/wjypark/" target="_blank" rel="noopener noreferrer"> 
                            <img src={LinkedinIcon } alt="linkedin-icon"/>
                        </a>
                        <a className="social-icon" href="mailto:wjypark94@gmail.com">
                            <img src={ EmailIcon } alt="email-icon" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;