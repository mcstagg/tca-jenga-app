import React from 'react';
import { useState } from 'react';
import './materialize.css';
import './App.css';

const SetupForm = ({ addPlayer, handleChecked, players }) => {

  const [playerName, setPlayerName] = useState('');
  
  return (

    <div className="gameSetup">

      <div className="row">
        <h4 className="left-align add-player-txt">
          Add a Player:
        </h4>
      </div>

      <div className="">
        <form className="">
          <div className="row name-input">
            <input 
              placeholder="Player Name" 
              id="first_name" 
              type="text" 
              className="col s5 m4 l3 offset-s1 offset-m2 offset-l3 validate"
              value={playerName}
              onChange={
                e => setPlayerName(e.target.value)
              }
            />
            <a 
              className="col s5 m4 l3 offset-m1 waves-effect waves-light btn blue-buttons add-player-btn"
              onClick={
                () => {
                  addPlayer(playerName); 
                  setPlayerName('');
                }
              }
            >
              Add Player
            </a>
          </div>
        </form>
      </div>

      <div className="row">
        <h4 className="left-align choose">
          Choose Players:
        </h4>
      </div>

      <form action="">
        <div className="row checks">

          <div className="col s4 m4 column1">

            {
              players.map(
                (player, index) => (

                  <p key={index} className="">
                    <label>
                      <input 
                        checked={player.checked} 
                        type="checkbox" 
                        onChange={
                          (e) => handleChecked(
                            index, 
                            e.target.checked
                          )
                        }
                      />
                      <span 
                        className=""
                      >
                        {player.name}
                      </span>
                    </label>
                  </p>

                )
              )
            }
            
          </div>

          <div className="col s4 m4 column2">
           
          </div>

          <div className="col s4 m4 column3">
            
          </div>

        </div>
      </form>
    </div>
  )    
}

export default SetupForm;