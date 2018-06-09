import React, {Component} from 'react';
import '../componentStyles/Work.css';
import iPhone1 from '../images/iphone-fridgeful.png';
import iPhone2 from '../images/iphone-brewtrackr.png';
import iPhone3 from '../images/iphone-trekcheck.png';
import Desktop1 from '../images/desktop-fridgeful.png';
import Desktop2 from '../images/desktop-brewtrackr.png';
import Desktop3 from '../images/desktop-trekcheck.png';

class Work extends Component{

    render(){
        return(
            <div id="work" className="work-content">
                <h1 className="work-header">Recent Work</h1>
                <h2 className="skills-header">Skills</h2>
                <h3 className="work-header2"> React | Redux | Node.js | Express.js | mongo DB | Mongoose | HTML | CSS | JavaScript | ES6 | jQuery | Passport.js | bcrypt.js | Mocha.js | Chai.js | Travis.CI | Heroku | Git | GitHub | Responsive Design | API integration </h3>

                <div className="app-title">
                    <h1>Fridgeful</h1>
                    <a href="https://fridgeful.netlify.com">
                        <h5 className="app-link">fridgeful.netlify.com</h5>
                    </a>
                    <hr className="hr-app"></hr>
                </div>
                <div className="project-content">
                    <div className="project-image-content">
                        <img className="project-img" onClick={() => {window.location.href = "https://fridgeful.netlify.com"}} src={Desktop1} alt="fridgeful"/>
                        <img className="iphone-img" src={iPhone1} alt="iphone"/>
                    </div>
                    <div className="project-description-content">

                        <h2>Stack</h2>
                        <h5>React | Redux | HTML5 | CSS3 | JavaScript | ES6 | Node.js | Express.js | Mongo DB | Mongoose | Edamam API</h5>
                        <h2> Tools </h2>
                        <h5> Mocha.js | Chai.js | Enzyme | Travis CI | Netlify | Heroku | Responsive Design | Git | Github</h5>
                        <div className="app-buttons">
                            <a href="https://fridgeful.netlify.com">
                                <button type="button" className="live-button">LIVE DEMO</button> 
                            </a>
                            <a href="https://github.com/wjypark94/fridgeful-client">
                                <button type="button" className="code-button">CODE</button>
                            </a>
                        </div>

                    </div>
                </div>
                <div className="app-description">
                <h5>Helping users decrease the amount of food waste in the world, Fridgeful allows users to search recipes based on the ingredients in their fridge. Users are able to write comments and save recipes into their own personal database.</h5>
                <hr className="hr-description"></hr>
                </div>
            
                <div className="app-title">
                    <h1>BrewTrackr </h1>
                    <a href="https://brewtrackr.herokuapp.com">
                        <h5 className="app-link">brewtrackr.herokuapp.com</h5>
                    </a>
                    <hr className="hr-app"></hr>
                </div>
                <div className="project-content content-reverse">
                    <div className="project-image-content">
                        <img className="project-img" onClick={()=> {window.location.href="https://brewtrackr.herokuapp.com"}}src={Desktop2} alt="brewtrackr"/>
                        <img className="iphone-img" src={iPhone2} alt="iphone"/>
                    </div>
                    <div className="project-description-content">
                        <h2>Stack</h2>
                        <h5>JavaScript | jQuery | HTML | CSS | Bootstrap | Node.js | Express.js | Mongo DB | Mongoose | Foursquare API</h5>
                        <h2> Tools </h2>
                        <h5> Mocha.js | Chai.js | Enzyme | Travis CI | Heroku | Responsive Design | Git | Github</h5>
                        <div className="app-buttons">
                            <a href="https://brewtrackr.herokuapp.com">
                                <button className="live-button">LIVE DEMO </button>
                            </a>
                            <a href="https://github.com/wjypark94/brew-trackr">
                                <button className="code-button">CODE </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="app-description">
                <h5>BrewTrackr allows users to search for coffee or breweries in any city. Users are able to write their own reviews and save their search results into their own list. Keep track of all your favorite coffee and breweries with BrewTrackr.</h5>
                <hr className="hr-description"></hr>
                </div>

                <div className="app-title">
                    <h1>TrekCheck</h1>
                    <a href="https://wjypark94.github.io/trek-check/">
                        <h5 className="app-link">wjypark94.github.io/trek-check/</h5>
                    </a>
                    <hr className="hr-app"></hr>
                </div>
                <div className="project-content">
                    <div className="project-image-content">
                        <img className="project-img" onClick={()=>{window.location.href="https://wjypark94.github.io/trek-check/"}}src={Desktop3} alt="trekcheck"/>
                        <img className="iphone-img" src={iPhone3} alt="iphone"/>
                    </div>
                    <div className="project-description-content">
                        <h2>Stack</h2>
                        <h5>JavaScript | jQuery | HTML | CSS | OpenWeatherMap API | Foursquare API | GoogleMaps </h5>
                        <div className="app-buttons">
                            <a href="https://wjypark94.github.io/trek-check/">
                                <button className="live-button">LIVE DEMO</button>
                            </a>
                            <a href="https://github.com/wjypark94/trek-check">
                                <button className="code-button">CODE</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="app-description">
                <h5>TrekCheck is a responsive web application that allows users to look up both hiking and weather data in a specified location with one quick search. Check the current weather and find the best hiking trails nearby with TrekCheck.</h5>
                <hr className="hr-description"></hr>
                </div>

            </div>
        )
    }
}

export default Work;