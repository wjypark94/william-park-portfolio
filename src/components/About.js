import React, {Component} from 'react';
import '../componentStyles/About.css';
import Profile from '../images/profile-picture.jpeg';

class About extends Component {
    render(){
        return(
            <div>
            <div id="about" className="about">
                <div className="about-content">
                    <h2 className="about-title">About Me</h2>
                    <h3 className="about-intro1">William Park</h3>
                    <h3 className="about-intro2"> Web Developer from Los Angeles, CA</h3>
                    <p className="about-paragraph">I'm a web developer with a knack for Full-stack development based in Los Angeles, California. Originally coming from a Pre-Health background, I later realized that programming is my true passion. With a strong grounding in both front and back end development, I am currently focusing on development with React and Node/Express.</p>
                </div>
                <div className="about-img-content">
                    <img className="profile-img" src={Profile} alt="profile"></img>
                </div>
            </div>
            <hr className="hr-about"></hr>
            </div>
        )
    }
}

export default About;