import React, {Component} from 'react';
import '../componentStyles/About.css';
import Profile from '../images/profile-picture.jpeg';

class About extends Component {
    render(){
        return(
            <div id="about" className="about">
                <div className="about-content">
                <h2>About</h2>
                <p>Hey, I'm William Park, a full-stack software engineer based in Los Angeles, CA.</p>

                <p> Skills </p>
                <p>React, Redux, Node, Expres, Mongo, Mongoose, JavaScript, Jquery, HTML, CSS</p>


                </div>
                <div className="about-img-content">
                    <img className="profile-img" src={Profile} alt="profile"></img>
                </div>
                <div className="about-bio-content">
                    <p>This is the about section for William Park</p>
                </div>
            </div>
        )
    }
}

export default About;