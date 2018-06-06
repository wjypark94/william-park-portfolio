import React, {Component} from 'react';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNav: false,
        }
    }

    render(){
        return(
            <section className="Nav">
            <div className="header-nav">
                <nav className="nav-menu">
                    <a id="about" className="nav-item" href="/about">About</a>
                    <a id="work" className="nav-item" href="/about">Work</a>
                    <a id="contact" className="nav-item" href="/contact">Contact</a>
                    <a id="resume" className="nav-item" href="/resume">Resume</a>
                </nav>
            </div>
            </section>
        )
    }
}

export default NavBar;