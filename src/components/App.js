import React, { Component } from 'react';
import '../componentStyles/App.css';
import About from './About';
import NavBar from './NavBar';
import Work from './Work';
import Contact from './Contact';
import ParticlesEffect from './Particles';

class App extends Component {
  render() {
    return (
      <section className="App">
      <NavBar/>
        <section className="landing-background">
          <ParticlesEffect/>
          <div className="header">
              <h2 className="site-title">Will Park</h2>
              <h1 className="site-description">Full Stack Web Developer</h1>
              <div className="header-links">
                <a href="mailto:wjypark94@gmail.com">
                  <i className="icon fa fa-envelope"></i>
                </a>
                <a href="https://github.com/wjypark94">
                 <i className="icon fa fa-github-alt" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com/in/wjypark">
                  <i className="icon fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
          </div>
          <div className="arrow-wrapper">
            <i className="fa fa-chevron-down smooth-container" aria-hidden="true"></i>
          </div>
          </section>
        <section className="main-body">
          <About/>
          <Work/>
          <Contact/>

        </section>
      </section>
    );
  }
}

export default App;
