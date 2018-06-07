import React, { Component } from 'react';
import '../componentStyles/App.css';
import About from './About';
import NavBar from './NavBar';
import Work from './Work';
import Contact from './Contact';
import Particles from 'react-particles-js';

class App extends Component {
  render() {
    return (
      <section className="App">
      <NavBar/>
        <section className="landing-background">
        <Particles 
              params={{
            		particles: {
                  number: {
                    value: 150,
                    density: {
                      enable: true,
                      value_area: 900
                    }
                  },
                  line_linked: {
                    enable: true,
                    distance: 120,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                  },
                  "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 0,
                      "color": "#000000"
                    },
                  }
                 },
                  "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                      "onhover": {
                        "enable": true,
                        "mode": "repulse"
                      },
                      "onclick": {
                        "enable": true,
                        "mode": "push"
                      },
                      "resize": true
                    },
                    "modes": {
                      "grab": {
                        "distance": 400,
                        "line_linked": {
                          "opacity": 1
                        }
                      },
                      "repulse": {
                        "distance": 200,
                        "duration": 0.4
                      }
                    }
                  },
                  "retina_detect": true
            	}}
              style={{
                width: '100%',
              }}
            />
          <div className="landing-title-cont">
              <h1>William Park</h1>
              <p>FullStack Web Developer, <i> Los Angeles, CA </i></p>
          </div>
          </section>
        <section className="main-body">
          <Work/>
          <About/>
          <Contact/>

        </section>
      </section>
    );
  }
}

export default App;
