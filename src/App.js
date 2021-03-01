import React from 'react';
import './materialize.css';
import './App.css';
import HomeStats from './HomeStats';
import GameSetup from './GameSetup'; 
import Gameplay from './Gameplay'; 
import PostGame from './PostGame'; 
import {Route} from 'react-router-dom';
import NavBar from './NavBar';
import Header from './Header';

function App() {
  return (
    <div className="container">
      <NavBar className="nav"/>
      <Header />
      <Route exact path="/" component={HomeStats}/>
      <Route exact path="/gameSetup" component={GameSetup}/>
      <Route exact path="/gameplay" component={Gameplay}/>
      <Route exact path="/postGame" component={PostGame}/>
    </div>
  );
}

export default App;
