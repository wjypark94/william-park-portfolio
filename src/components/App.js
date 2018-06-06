import React, { Component } from 'react';
import '../componentStyles/App.css';
import About from './About';
import NavBar from './NavBar';
import Work from './Work';

class App extends Component {
  render() {
    return (
      <section className="App">
      <NavBar/>
        <section className="landing-background">
          <div className="landing-title-cont">
              <h1>William Park</h1>
              <p>FullStack Web Developer, <i> Los Angeles, CA </i></p>
          </div>
          </section>
        <section className="main-body">
          <Work/>
          <About/>
        </section>
      </section>
    );
  }
}

export default App;
