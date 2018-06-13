import React, {Component} from 'react';
import '../componentStyles/Skills.css';

class Skills extends Component{
    render(){
        return(
            <div className="skills-container">
                <h3 className="skills-header"> Technical Skills </h3>
                <p className="skills-paragraph">React | Redux | Node.js | Express.js | Mongo DB | Mongoose | HTML | CSS | JavaScript | ES6 | jQuery | Passport.js | bcrypt.js | Mocha.js | Chai.js | Travis.CI | Heroku | Netlify |Git | GitHub | Responsive Design | API integration </p>
            </div>
        )
    }
}

export default Skills;