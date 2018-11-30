import React, { Component } from "react";
import "../componentStyles/App.css";
import About from "./About";
import NavBar from "./NavBar";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Footer";
import Skills from "./Skills";
import ParticlesEffect from "./Particles";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <section className="App">

        <section className="landing-background">
          <ParticlesEffect />
          <Header />
        </section>
        <section className="main-body">
          <NavBar/>
          <About />
          <Skills />
          <Work />
          <Contact />
          <Footer />
        </section>
      </section>
    );
  }
}

export default App;
