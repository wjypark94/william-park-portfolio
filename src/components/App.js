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
