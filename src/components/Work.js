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
                <div className="project-content">
                    <div className="project-image-content">
                        <img className="project-img" onClick={() => {window.location.href = "https://fridgeful.netlify.com"}} src={Desktop1} alt="fridgeful"/>
                        <img className="iphone-img" src={iPhone1} alt="iphone"/>
                    </div>
                    <div className="project-description-content">
                        <h3 className="project-title">Fridgeful</h3>
                        <p>Test paragraph. A lot of time and effort was put into this project</p>
                    </div>
                </div>


                <div className="project-content content-reverse">
                    <div className="project-image-content">
                        <img className="project-img" onClick={()=> {window.location.href="https://brewtrackr.herokuapp.com"}}src={Desktop2} alt="brewtrackr"/>
                        <img className="iphone-img" src={iPhone2} alt="iphone"/>
                    </div>
                    <div className="project-description-content">
                        <h3 className="project-title"> BrewTrackr </h3>
                        <p>A lot of time and effort was put into this Project 2</p>
                    </div>
                </div>

                <div className="project-content">
                    <div className="project-image-content">
                        <img className="project-img" onClick={()=>{window.location.href="https://wjypark94.github.io/trek-check/"}}src={Desktop3} alt="trekcheck"/>
                        <img className="iphone-img" src={iPhone3} alt="iphone"/>
                    </div>
                    <div className="project-description-content">
                        <h3 className="project-title"> TreckCheck </h3>
                        <p> A lot of time and effort was put into Project 3</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Work;