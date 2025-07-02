import React from 'react';
import {BrowserRouter as Router, Route , Switch, Link } from 'react-router-dom';

//import pp from './components/pp.jpg';

import Projects from './pages/Projects';
import About from './pages/About';

function App() {
    return (
    <Router>
      <Switch>
        <center className="App">
          <div className="background-container">
            <div className="background"></div>
            <div className="background-shade"></div>
            <div className="profile-container">
              <div className="profile-name">Subharjun Bose</div>
              <div className="profile-desc">Full Stack Developer & ML Enthusiast</div>
              <br />
            </div>
          </div>
          <div className="container">
              <div className="tabs">
              <Link to="/about" className="about-link open">ABOUT</Link>
                <Link to="/projects" className="projects-link">PROJECTS</Link>
              </div>
                <Route exact path="/" component={About} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/about" component={About} />
          </div>
          <div className="footer">
            Made with love by Subharjun
          </div>
        </center>
      </Switch>
    </Router>
  );
}

export default App;
