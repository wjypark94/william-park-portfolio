import React, {Component} from 'react';
import Project1 from '../images/project-1.png';
import Project2 from '../images/project-2.png';
import Project3 from '../images/project-3.png';
import '../componentStyles/Work.css';

class Work extends Component{

    render(){
        return(
            <div id="work" className="work-content">

                <div className="project-content">
                    <div className="project-image-content">
                        <img className="project-img" onClick={() => {window.location.href = "https://fridgeful.netlify.com"}} src={Project1} alt="fridgeful"/>
                    </div>
                    <div className="project-description-content">
                        <h3>Fridgeful</h3>
                        <p>Test paragraph. A lot of time and effort was put into this project</p>
                    </div>
                </div>


                <div className="project-content content-reverse">
                    <div className="project-image-content">
                        <img className="project-img" onClick={()=> {window.location.href="https://brewtrackr.herokuapp.com"}}src={Project2} alt="brewtrackr"/>
                    </div>
                    <div className="project-description-content">
                        <h3> BrewTrackr </h3>
                        <p>A lot of time and effort was put into this Project 2</p>
                    </div>
                </div>

                <div className="project-content">
                    <div className="project-image-content">
                    <img className="project-img" onClick={()=>{window.location.href="https://wjypark94.github.io/trek-check/"}}src={Project3} alt="trekcheck"/>
                    </div>
                    <div className="project-description-content">
                        <h3> TreckCheck </h3>
                        <p> A lot of time and effort was put into Project 3</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Work;