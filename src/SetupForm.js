import React from 'react';
import './materialize.css';
import './App.css';

const SetupForm = () => {
  
  return (
    <div className="gameSetup">

      <div className="row">
        <h4 className="left-align add-player-txt">Add a Player:</h4>
      </div>

      <div className="">
        <form className="">
          <div className="row name-input">
          <input placeholder="Player Name" id="first_name" type="text" className="col s5 m4 l3 offset-s1 offset-m2 offset-l3 validate"></input>
          <a className="col s5 m4 l3 offset-m1 waves-effect waves-light btn blue-buttons add-player-btn">Add Player</a>
          </div>
        </form>
      </div>

      <div className="row">
        <h4 className="left-align choose">Choose Players:</h4>
      </div>

      <form action="#">
        <div className="row checks">
          <div className="col s4 m4 column1">
            <p className="">
            <label>
            <input type="checkbox" className="" />
            <span className="">Mike S</span>
            </label>
            </p>
            <p>
            <label>
            <input type="checkbox" />
            <span>Travis</span>
            </label>
            </p>
            <p>
            <label>
            <input type="checkbox" />
            <span>Eric J</span>
            </label>
            </p>
            <p>
            <label>
            <input type="checkbox" />
            <span>John J</span>
            </label>
            </p>
            <p>
            <label>
            <input type="checkbox" />
            <span>Jeremey</span>
            </label>
            </p>
          </div>

          <div className="col s4 m4 column2">
            <p>
            <label>
            <input type="checkbox" />
            <span>Scotty</span>
            </label>
            </p>
            <p>
            <label>
            <input type="checkbox" />
            <span>Mark L</span>
            </label>
            </p>
            <p>
            <label>
            <input type="checkbox" />
            <span>DCP</span>
            </label>
            </p>
            <p>
            <label>
            <input type="checkbox" />
            <span>Danny</span>
            </label>
            </p>
            <p>
            <label>
            <input type="checkbox" />
            <span>Terje</span>
            </label>
            </p>
          </div>

          <div className="col s4 m4 column3">
            <p>
            <label>
            <input type="checkbox" />
            <span>Jussi</span>
            </label>
            </p>
            <p>
            <label>
            <input type="checkbox" />
            <span>Torstein</span>
            </label>
            </p>
            <p>
            <label>
            <input type="checkbox" />
            <span>Haldor</span>
            </label>
            </p>
            <p>
            <label>
            <input type="checkbox" />
            <span>Ben</span>
            </label>
            </p>
            <p>
            <label>
            <input type="checkbox" />
            <span>Jamie</span>
            </label>
            </p>
          </div>

        </div>
      </form>
    </div>
  )    
}

export default SetupForm;