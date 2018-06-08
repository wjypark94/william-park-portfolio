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
                <h3> I use modern technologies to build web applications and websites that look great on the browser or on the phone. The mobile compatibility is one of my main concerns so I'm always focused on making my applications work well on mobile devices.</h3>
                <div className="project-content">
                    <div className="project-image-content">
                        <img className="project-img" onClick={() => {window.location.href = "https://fridgeful.netlify.com"}} src={Desktop1} alt="fridgeful"/>
                        <img className="iphone-img" src={iPhone1} alt="iphone"/>
                    </div>
                    <div className="project-description-content">
                        <h3 className="project-title">Fridgeful</h3>
                        <p>Helping users decrease the amount of food waste in the world, Fridgeful allows users to search recipes based on the ingredients in their fridge. Users are able to write comments and save recipes into their own personal database.</p>
                    </div>
                </div>


                <div className="project-content content-reverse">
                    <div className="project-image-content">
                        <img className="project-img" onClick={()=> {window.location.href="https://brewtrackr.herokuapp.com"}}src={Desktop2} alt="brewtrackr"/>
                        <img className="iphone-img" src={iPhone2} alt="iphone"/>
                    </div>
                    <div className="project-description-content">
                        <h3 className="project-title"> BrewTrackr </h3>
                        <p>BrewTrackr allows users to search for coffee or breweries in any city. Users are able to write their own reviews and save their search results into their own list. Keep track of all your favorite coffee and breweries with BrewTrackr.</p>
                    </div>
                </div>

                <div className="project-content">
                    <div className="project-image-content">
                        <img className="project-img" onClick={()=>{window.location.href="https://wjypark94.github.io/trek-check/"}}src={Desktop3} alt="trekcheck"/>
                        <img className="iphone-img" src={iPhone3} alt="iphone"/>
                    </div>
                    <div className="project-description-content">
                        <h3 className="project-title"> TreckCheck </h3>
                        <p>TrekCheck is a responsive web application that allows users to look up both hiking and weather data in a specified location with one quick search. Check the current weather and find the best hiking trails nearby with TrekCheck.</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Work;