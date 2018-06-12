import React, {Component} from 'react';

import '../componentStyles/Contact.css';

class Contact extends Component {
    
    render(){
        return(
            <div id="contact" className="contact">
                <h2 className="contact-header">Contact</h2>
                <div className="contact-content">
                    <h1 className="connect-header"> Let's connect! </h1>
                    <h3> I am open to relocating or potentially working remotely. If you'd like to go over an opportunity with me, feel free to reach out via email:</h3>
                    <a href="mailto:wjypark94@gmail.com"><h4>wjypark94@gmail.com</h4></a>
                    <button className="resume-button">Resume</button>
                </div>
            </div>
        )
    }
}

export default Contact;