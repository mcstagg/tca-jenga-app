import React from 'react';
import { Checkbox } from '@material-ui/core';

const SetupForm = () => {
  
  return (
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
  )    
}

export default SetupForm;