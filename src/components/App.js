import React, { Component } from 'react';
import '../componentStyles/App.css';
import About from './About';
import NavBar from './NavBar';
import Work from './Work';

class App extends Component {
  render() {
    return (
      <div className="header-portfolio">
      <NavBar/>
        <header>
          <h1 className="header-h1">
            William Park Portfolio
          </h1>
        </header>
        <Work/>
        <About/>
      </div>
    );
  }
}

export default App;
