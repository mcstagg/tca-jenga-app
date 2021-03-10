import React from 'react';
import './materialize.css';
import './App.css';

const SetupForm = () => {
  
  return (
    <div className="gameSetup">

      <div className="row">
        <h4 className="left-align">Add a Player:</h4>
      </div>

      <div className="row">
        <form className="col s12">
          <div className="row pl-1">
          <input placeholder="Player Name" id="first_name" type="text" className="col m4 s6 validate"></input>
          <a className="col s5 m3 offset-s1 offset-m1   waves-effect waves-light btn blue-buttons   add-player">Add Player</a>
          </div>
        </form>
      </div>

      <div className="row">
        <h4 className="left-align">Choose Players:</h4>
      </div>

      <form action="#">
        <div className="row">
          <div className="col s4 m4 check">
            <p>
            <label>
            <input type="checkbox" className="setup" />
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

          <div className="col s4 m4 pl-2">
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

          <div className="col s4 pl-2">
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