import React from 'react';
import { Checkbox } from '@material-ui/core';
import Leader from './Leader';

const GameSetup = () => {
  return (
    <>
      <Leader text="Game Setup" btnlink="./gameplay" btntext="Start Game" />

      <div className="container">
        <h5>Add a Player</h5>
        <h6>Player Name:</h6>
        <input type="textBox"></input>
        <button>Add Player</button>
        <h5>Players</h5>
        <div className="players">
          <h5>Choose competitor:</h5>
          <ul className="container">
            <li><Checkbox value="checked"/>Mike</li>
            <li><Checkbox value="checked"/>Travis</li>
            <li><Checkbox value="checked"/>Jeremey</li>
            <li><Checkbox value="checked"/>Patt</li>
            <li><Checkbox value="checked"/>Haldor</li>
            <li><Checkbox value="checked"/>John J</li>
          </ul>
        </div>
      </div>

      <div className="row blue darken-1 leaderboard-header">
        <h4 className="col s6 lb-header-text">Ready to Start?</h4>
        <a href="/gameplay" className="waves-effect waves-light btn col 2 offset-s2"><i className="material-icons right">jenga!</i>Play</a>
      </div>
    </>
  )
}

export default GameSetup;