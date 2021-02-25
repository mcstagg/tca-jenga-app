import React from 'react';
import jenga from './tower.PNG';

const GameSetup = () => {
  return (
    <>
    <h1>Game Setup Page</h1>
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

      <div className="row deep-orange darken-1 header">
        <img src={jenga} alt="jenga" className="col s3 header-towers" />
        <h1 className="col s6 white-text header-text">Jenga <br/> Companion</h1>
        <img src={jenga} alt="jenga" className="col s3 header-towers" />
      </div>

      <div className="row blue darken-1 leaderboard-header">
        <h4 className="col s6 lb-header-text">Leaderboard</h4>
        <a href="/GameSetup.js" className="waves-effect waves-light btn col 2 offset-s2"><i className="material-icons right">jenga!</i>Play</a>
      </div>

      <div className="row blue darken-1 leaderboard-header">
        <h4 className="col s6 lb-header-text">Ready to Start?</h4>
        <a className="waves-effect waves-light btn col 2 offset-s2"><i className="material-icons right">jenga!</i>Play</a>
      </div>
    </>
  )
}

export default GameSetup;