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

  const [players, setPlayers] = React.useState([]);

  return (
    <div className="jenga container">
      <Nav />
      <Banner />
      <Route exact path="/" component={HomeStats}/>
      <Route exact path="/gameSetup">
        <GameSetup players={players} setPlayers={setPlayers}/>
      </Route>
      <Route exact path="/gameplay">
        <Gameplay players={players} setPlayers={setPlayers}/>
      </Route>
      <Route exact path="/postGame" component={PostGame}/>
    </div>
  );
}

export default App;
