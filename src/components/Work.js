import React, {Component} from 'react';
import '../componentStyles/Work.css';
import iPhone1 from '../images/iphone-fridgeful.png';
import iPhone2 from '../images/iphone-brewtrackr.png';
import iPhone3 from '../images/iphone-trekcheck.png';
import iPhone4 from '../images/iphone-hotcold.png';
import Desktop1 from '../images/desktop-fridgeful.png';
import Desktop2 from '../images/desktop-brewtrackr.png';
import Desktop3 from '../images/desktop-trekcheck.png';
import Desktop4 from '../images/desktop-hotcold.png';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';

class Work extends Component{

    render(){
        return(
            <div id="work" className="work-content">
                <Fade left>
                    <h1 className="work-header">Recent Work</h1>
                </Fade>

                <Fade>
                    <div className="app-title">
                        <h1>Fridgeful</h1>
                        <a href="https://fridgeful.netlify.com">
                            <h5 className="app-link">fridgeful.netlify.com</h5>
                        </a>
                        <hr className="hr-app"></hr>
                    </div>
                </Fade>

                <Fade>
                <Pulse>
                    <div className="project-content">
                        <div className="project-image-content">
                            <img className="project-img" onClick={() => {window.location.href = "https://fridgeful.netlify.com"}} src={Desktop1} alt="fridgeful"/>
                            <img className="iphone-img" src={iPhone1} alt="iphone"/>
                        </div>
                    </div>
        
                    <div className="app-description">
                        <h5 className="app-details">Helping users decrease the amount of food waste in the world, Fridgeful allows users to search recipes based on the ingredients in their fridge. Users are able to write comments and save recipes into their own personal database.</h5>
                        <div className="app-buttons">
                            <a href="https://fridgeful.netlify.com">
                                <button type="button" className="live-button">LIVE DEMO</button> 
                            </a>
                            <a href="https://github.com/wjypark94/fridgeful-client">
                                <button type="button" className="code-button">CODE</button>
                            </a>
                        </div>
                        <div className="project-description-content">
                            <h5>React · Redux · JavaScript · HTML5 · CSS3 · Node.js <br/> Express · MongoDB · Edamam API · Travis CI · Netlify · Heroku</h5>
                        </div>
                        <hr className="hr-description"></hr>
                    </div>
                </Pulse>
                </Fade>

                <Fade>
                    <div className="app-title">
                        <h1>BrewTrackr </h1>
                        <a href="https://brewtrackr.herokuapp.com">
                            <h5 className="app-link">brewtrackr.herokuapp.com</h5>
                        </a>
                        <hr className="hr-app"></hr>
                    </div>
                </Fade>

                <Fade>
                <Pulse>
                    <div className="project-content">
                        <div className="project-image-content">
                            <img className="project-img" onClick={()=> {window.location.href="https://brewtrackr.herokuapp.com"}}src={Desktop2} alt="brewtrackr"/>
                            <img className="iphone-img" src={iPhone2} alt="iphone"/>
                        </div>
                    </div>
                    <div className="app-description">
                        <h5 className="app-details">BrewTrackr allows users to search for coffee or breweries in any city. Users are able to write their own reviews and save their search results into their own list. Keep track of all your favorite coffee and breweries with BrewTrackr.</h5>
                        <div className="app-buttons">
                            <a href="https://brewtrackr.herokuapp.com">
                                <button className="live-button">LIVE DEMO </button>
                            </a>
                            <a href="https://github.com/wjypark94/brew-trackr">
                                <button className="code-button">CODE </button>
                            </a>
                        </div>
                        <div className="project-description-content">
                            <h5>JavaScript · jQuery · HTML · CSS · Node.js <br/> Express · Mongo DB · Foursquare API · Travis CI · Heroku</h5>
                        </div>
                        <hr className="hr-description"></hr>
                    </div>
                </Pulse>
                </Fade>

                <Fade>
                    <div className="app-title">
                        <h1>Hot N Cold</h1>
                        <a href="https://hotcold.netlify.com">
                            <h5 className="app-link">hotcold.netlify.com</h5>
                        </a>
                        <hr className="hr-app"></hr>
                    </div>
                </Fade>
                
                <Fade>
                <Pulse>
                    <div className="project-content">
                        <div className="project-image-content">
                            <img className="project-img" onClick={()=>{window.location.href="https://hotcold.netlify.com"}} src={Desktop4} alt="hotcold"/>
                            <img className="iphone-img" src={iPhone4} alt="iphone"/>
                        </div>
                    </div>
                    <div className="app-description">
                        <h5 className="app-details">Built with React and Redux, Hot or Cold is an interactive game that allows users to attempt to guess a randomly generated number. </h5>
                        <div className="app-buttons">
                            <a href="https://hotcold.netlify.com">
                                <button className="live-button">LIVE DEMO</button>
                            </a>
                            <a href="https://github.com/wjypark94/hot-cold">
                                <button className="code-button">CODE</button>
                            </a>
                        </div>
                        <div className="project-description-content">
                            <h5>React · Redux · JavaScript· HTML · CSS <br/> Enzyme · Jest · ParticlesJS · Netlify </h5>
                        </div>
                        <hr className="hr-description"></hr>
                    </div>
                </Pulse>
                </Fade>

                <Fade>
                    <div className="app-title">
                        <h1>TrekCheck</h1>
                        <a href="https://wjypark94.github.io/trek-check/">
                            <h5 className="app-link">wjypark94.github.io/trek-check/</h5>
                        </a>
                        <hr className="hr-app"></hr>
                    </div>
                </Fade>
                
                <Fade>
                <Pulse>
                    <div className="project-content">
                        <div className="project-image-content">
                            <img className="project-img" onClick={()=>{window.location.href="https://wjypark94.github.io/trek-check/"}}src={Desktop3} alt="trekcheck"/>
                            <img className="iphone-img" src={iPhone3} alt="iphone"/>
                        </div>
                    </div>
                    <div className="app-description">
                        <h5 className="app-details">TrekCheck is a responsive web application that allows users to look up both hiking and weather data in a specified location with one quick search. Check the current weather and find the best hiking trails nearby with TrekCheck.</h5>
                        <div className="app-buttons">
                            <a href="https://wjypark94.github.io/trek-check/">
                                <button className="live-button">LIVE DEMO</button>
                            </a>
                            <a href="https://github.com/wjypark94/trek-check">
                                <button className="code-button">CODE</button>
                            </a>
                        </div>
                        <div className="project-description-content">
                            <h5>JavaScript · jQuery · HTML · CSS <br/> OpenWeatherMap API · Foursquare API · GoogleMaps </h5>
                        </div>
                        <hr className="hr-description"></hr>
                    </div>
                </Pulse>
                </Fade>
            </div>
        )
    }
}

export default Work;