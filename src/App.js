import { React, useState } from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import HomeStats from "./HomeStats";
import GameSetup from "./GameSetup";
import Gameplay from "./Gameplay";
import PostGame from "./PostGame";
import { Route } from "react-router-dom";
import "./materialize.css";
import "./App.css";

function App() {
  const [gamesPlayed, setGamesPlayed] = useState([]);
  const [players, setPlayers] = useState([]);
  const [game, setGame] = useState({
    moves: [],
    towerHeight: 18,
    gameTime: null,
    winnerPlayer: null,
    loserPlayer: null,
  });


  return (
    <div className="jenga container">
      <Nav />
      <Banner />
      <Route exact path="/">
        <HomeStats gamesPlayed={gamesPlayed} />
      </Route>
      <Route exact path="/gameSetup">
        <GameSetup players={players} setPlayers={setPlayers} />
      </Route>
      <Route exact path="/gameplay">
        <Gameplay
          game={game}
          setGame={setGame}
          gamesPlayed={gamesPlayed}
          setGamesPlayed={setGamesPlayed}
          players={players}
        />
      </Route>
      <Route exact path="/postGame">
        <PostGame game={game} players={players} />
      </Route>
    </div>
  );
}

export default App;
