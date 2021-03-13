import React from 'react';
import Nav from './Nav';
import Banner from './Banner';
import HomeStats from './HomeStats';
import GameSetup from './GameSetup'; 
import Gameplay from './Gameplay'; 
import PostGame from './PostGame'; 
import {Route} from 'react-router-dom';
import './materialize.css';
import './App.css';

function App() {
  return (
    <div className="sml jenga container">
      <Nav />
      <Banner />
      <Route exact path="/" component={HomeStats}/>
      <Route exact path="/gameSetup" component={GameSetup}/>
      <Route exact path="/gameplay" component={Gameplay}/>
      <Route exact path="/postGame" component={PostGame}/>
    </div>
  );
}

export default App;
