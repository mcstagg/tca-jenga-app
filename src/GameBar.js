import React from 'react';

const GameBar = () => {
  
  return (
    <div className="row blue darken-1 leaderboard-header">
      <h4 className="col s6 lb-header-text">Gameplay</h4>
      <a href="/gameplay" className="waves-effect waves-light btn col 2"><i className="material-icons right"></i>Make Move</a>
      <a href="/postGame" className="waves-effect waves-light btn col 2"><i className="material-icons right"></i>Jenga!</a>
      <a href="/" className="waves-effect waves-light btn col 2"><i className="material-icons right"></i>Forfeit</a>
    </div>
  )    
}

export default GameBar;