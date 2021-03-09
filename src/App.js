import React from 'react';
import './materialize.css';
import './App.css';
import HomeStats from './HomeStats';
import GameSetup from './GameSetup'; 
import Gameplay from './Gameplay'; 
import PostGame from './PostGame'; 
import {Route} from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';

function App() {
  return (
    <div className="sml jenga container">
      <Nav />
      <Header />
      <Route exact path="/" component={HomeStats}/>
      <Route exact path="/gameSetup" component={GameSetup}/>
      <Route exact path="/gameplay" component={Gameplay}/>
      <Route exact path="/postGame" component={PostGame}/>
    </div>
  );
}

export default App;
