import React, {Component} from 'react';
import '../componentStyles/Skills.css';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import Scroll from 'react-scroll';

class Skills extends Component{

    render(){
        let Link = Scroll.Link;
        return(
            <div id="skills" className="skills-container">
                <Pulse>
                <Fade>
                    <h3 className="tech-header"> Technical Skills </h3>
                    <div className="col-4 description">
                        <h3 className="skills-header"> Front End</h3>
                        <ul>
                            <li> JavaScript </li>
                            <li> ES6 </li>
                            <li> React </li>
                            <li> Redux </li>
                            <li> jQuery </li>
                            <li> HTML </li>
                            <li> CSS3 </li>
                            <li> Responsive Design </li>
                        </ul>
                    </div>    
                    <div className="col-4 description">
                        <h3 className="skills-header"> Back End/Server </h3>
                        <ul>
                            <li> Node </li>
                            <li> Express </li>
                            <li> MongoDB </li>
                            <li> Mongoose </li>
                            <li> PassportJS </li>
                            <li> Bcrypt.js </li>
                            <li> NPM </li>
                            <li> Webpack </li>
                        </ul>
                    </div>
                    <div className="col-4 description">
                        <h3 className="skills-header">Tools/Testing</h3>
                        <ul>
                            <li>Mocha</li>
                            <li>Chai</li>
                            <li> Travis CI </li>
                            <li> Enzyme </li>
                            <li> Jest </li>
                            <li> Heroku </li>
                            <li> Netlify </li>
                            <li> Git </li>
                            <li> GitHub </li>
                        </ul>
                    </div>
                    <div className="skills-wrapper">
                        <Fade bottom>
                            <Link to="work" offset={20} spy={true} smooth={true} duration={700}>
                                <i className="fa fa-chevron-down smooth-container" aria-hidden="true" ></i>
                            </Link>
                        </Fade>
                    </div>
                    <hr className="hr-skills"></hr>
                </Fade>
                </Pulse>
            </div>
        )
    }
}

export default Skills;