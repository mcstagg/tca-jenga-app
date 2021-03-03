import React from 'react';

const SetupForm = () => {
  
  return (
    <div className="gameSetup">
      <h5>Add a Player:</h5>
      <h6>Player Name:</h6>
      <input type="textBox"></input>
      <button>Add Player</button>
      <h5>Choose Players:</h5>

      <div className="players">
        <form action="#">
          <div className="row">
            <div className="col s4">
            <p>
            <label>
            <input type="checkbox" />
            <span>Mike S</span>
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
            <div className="col s4">
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
            <span>Danny D</span>
            </label>
            </p>
            <p>
            <label>
            <input type="checkbox" />
            <span>Terje</span>
            </label>
            </p>
            </div>
            <div className="col s4">
            <p>
            <label>
            <input type="checkbox" />
            <span>Jussi O</span>
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
            <span>Ben Ferguson</span>
            </label>
            </p>
            <p>
            <label>
            <input type="checkbox" />
            <span>Jamie A</span>
            </label>
            </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )    
}

export default SetupForm;