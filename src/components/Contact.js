import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import '../componentStyles/Contact.css';

class Contact extends Component {
    
    render(){
        return(
            <div id="contact" className="contact">
                <Fade left>
                <h2 className="contact-header">Contact</h2>
                </Fade>
                <div className="contact-content">
                    <Fade right>
                    <h1 className="connect-header"> Let's connect! </h1>
                    <h3> I am open to relocating or potentially working remotely. If you'd like to go over an opportunity with me, feel free to reach out via email:</h3>
                    <a href="mailto:wjypark94@gmail.com"><h4>wjypark94@gmail.com</h4></a>
                    </Fade>
                </div>
                <a className="btn-primary">
                    <i className="fa fa-download"></i> MY RESUME
                </a>

            </div>
        )
    }
}

export default Contact;