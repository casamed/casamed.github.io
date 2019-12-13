import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App m-scene" id="main">
      {/* <h1 id="PageTitle">Taylor Bruce Fitness </h1> */}
      <nav className="navbar fixed-top navbar-dark bg-dark">
        <h1 className="m-right-panel m-page scene_element scene_element--fadeinright"id="PageTitle">Taylor Bruce Fitness</h1>
      </nav>
      <header className="App-header m-header scene_element scene_element--fadein">
        
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="m-page scene_element scene_element--fadeinup">
          <h2>I can be your personal Trainer</h2>
          <h2>I will help you achieve a fit and healthy lifestyle.</h2>
          <h2>I am a fitness and nutrition graduate, looking to help you crush your goals. I will combine physical training sessions with nutrition to help you accomplish your fitness goals. </h2>

        <a
          className="Instagram"
          href="https://www.instagram.com/babytayb_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        </div>
      </header>
    </div>
  );
}

export default App;
