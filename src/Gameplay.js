import React from 'react';
import jenga from './tower.PNG';
import Header from './Header';

const Gameplay = () => {
  return (
    <>
    <div className="row blue darken-1 top-bar">
        <div className="col s1">1</div>
        <div className="col s1">2</div>
        <div className="col s1">3</div>
        <div className="col s1">4</div>
        <div className="col s1">5</div>
        <div className="col s1">6</div>
        <div className="col s1">7</div>
        <div className="col s1">8</div>
        <div className="col s1">9</div>
        <div className="col s1">10</div>
        <div className="col s1">11</div>
        <div className="col s1">12</div>
      </div>

      <Header />

      <div className="row blue darken-1 leaderboard-header">
        <h4 className="col s6 lb-header-text">GamePlay</h4>
        <a href="/gameplay" className="waves-effect waves-light btn col 2 offset-s2"><i className="material-icons right"></i>Make Move</a>
      </div>

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