import React, {Component} from 'react';
import '../componentStyles/About.css';
import Profile from '../images/profile-picture.jpeg';
import Fade from 'react-reveal/Fade';
import Scroll from 'react-scroll';

class About extends Component {

    render(){
        let Link = Scroll.Link;
        return(
            <div className="about-container">
                <div id="about" className="about">
                    <Fade left>
                        <div className="about-content">
                            <h2 className="about-title">About Me</h2>
                            <h3 className="about-intro1">William Park</h3>
                            <h3 className="about-intro2"> Full Stack Web Developer from Los Angeles, CA</h3>
                            <p className="about-paragraph"> Hi there! I’m a software engineer interested in frontend and full-stack development roles. My experience with JavaScript extends across the full-stack spectrum and I enjoy leveraging various libraries and frameworks to create modular components and scalable applications. I relish any opportunity to work with new technologies while obtaining mastery with my other skills. I love to design and code a simple, beautiful user experience with a priority for accessibility. Ultimately, I want to work on bringing inspirational ideas to life.</p>
                            <p className="about-paragraph"> Originally coming from a Pre-Health background, I later realized that programming is my true passion. I regularly draw upon my experience as a physical therapy aide where being resourceful, taking initiative, and encouraging others were all essential keys to building a thriving community and successful production. Through this experience, I learned to love working with a team to come up with the most creative solutions in problem solving. This led me to finding enjoyment in the entire full-stack development process, where I can create frontend user-facing features and work out the backend logic throughout the server, database, and deployment.</p>
                            <p className="about-paragraph"> Check out some of my projects below! </p>
                        </div>
                    </Fade>
                    <Fade>
                        <div className="about-img-content">
                            <img className="profile-img" src={Profile} alt="profile"></img>
                        </div>
                    </Fade>
                </div>
                <div className="about-wrapper">
                    <Fade bottom>
                        <Link to="skills" offset={5} spy={true} smooth={true} duration={700}>
                            <i className="fa fa-chevron-down smooth-container" aria-hidden="true" ></i>
                        </Link>
                    </Fade>
                </div>
              
                <hr className="hr-about"></hr>
            </div>
            
        )
    }
}

export default About;