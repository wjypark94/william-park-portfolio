import React, {Component} from 'react';

class Work extends Component{

    render(){
        return(
            <div>

                <div className="project-content">
                    <div className="project-image-content">
                        <h1>Image goes here</h1>
                    </div>
                    <div className="project-decsription-content">
                        <h3>Project 1</h3>
                        <p>Test paragraph. A lot of time and effort was put into this project</p>
                    </div>
                </div>


                <div className="project-content conent-reverse">
                    <div className="project-image-content">
                        <h1> Image goes here </h1>
                    </div>
                    <div className="project-decription-content">
                        <h3> Project 2 </h3>
                        <p>A lot of time and effort was put into this Project 2</p>
                    </div>
                </div>

                <div className="project-content">
                    <div className="project-image-content">
                        <h1>Image goes here </h1>
                    </div>
                    <div className="project-description-content">
                        <h3> Project 3 </h3>
                        <p> A lot of time and effort was put into Project 3</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Work;