import React, {Component} from 'react';
import '../componentStyles/About.css';
import Profile from '../images/profile-picture.jpeg';

class About extends Component {
    render(){
        return(
            <div id="about" className="about">
                <div className="about-img-content">
                    <img className="profile-img" src={Profile} alt="profile"></img>
                </div>
                <div className="about-bio-content">
                    <h3 className="about-header">About</h3>
                    <p>This is the about section for William Park</p>
                </div>
            </div>
        )
    }
}

export default About;