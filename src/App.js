import React from 'react';
import jenga from './tower.PNG';
import './materialize.css';
import './App.css';
import HomeStats from './HomeStats';
import GameSetup from './GameSetup'; 
import Gameplay from './Gameplay'; 
import PostGame from './PostGame'; 
import {Route, Link} from 'react-router-dom';
import NavBar from './NavBar';

function App() {
  return (
    <div className="container">
      <NavBar className="nav"/>
      <Route exact path="/" component={HomeStats}/>
      <Route exact path="/gameSetup" component={GameSetup}/>
      <Route exact path="/gameplay" component={Gameplay}/>
      <Route exact path="/postGame" component={PostGame}/>
    </div>
  );
}

export default App;
