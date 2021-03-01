import React from 'react';
import Leader from './Leader';

const Gameplay = () => {

  return (
    <>
      <Leader text="Gameplay" btnlink="./postGame" btntext="JENGA!" />

      <div className="row players">
        <h2 className="col 4">Player 1</h2>
        <h4 className="col 4">VS</h4>
        <h2 className="col 4">Player 2</h2>
      </div>

      <div className="row blue darken-1 leaderboard-header">
        <h4 className="col s6 lb-header-text">Gameplay</h4>
        <a href="/gameplay" className="waves-effect waves-light btn col 2"><i className="material-icons right"></i>Make Move</a>
        <a href="/postGame" className="waves-effect waves-light btn col 2"><i className="material-icons right"></i>Jenga!</a>
        <a href="/" className="waves-effect waves-light btn col 2"><i className="material-icons right"></i>Forfeit</a>
      </div>
    </>
  )
}

export default Gameplay;