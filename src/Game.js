import React from 'react';

const Game = (props) => {
  
  return (  
    
    <>
      <div className="row mt-half">
        <div className="col s5 p-0">
          <div className="card-panel light-blue lighten-1 center blue-buttons">
            <h2 className="white-text">Player 1</h2>
          </div>
        </div>
        <div className="col s2 p-0">
          <div className="card-panel blue darken-1 center">
            <h2 className="white-text">VS</h2>
          </div>
        </div>
        <div className="col s5 p-0">
          <div className="card-panel light-blue lighten-1 center blue-buttons">
            <h2 className="white-text">Player 2</h2>
          </div>
        </div>
      </div>

      <div>
        <form>
          <h1 className="center mt-half" >Player 1's Turn</h1>
          <div className="row center">
            <h5 className="col s4">Removed From:</h5>
            <h5 className="col s4 offset-s4">Replaced On:</h5>
          </div>

          <div className="row center">
            <div className="col s2 pl-1">
              <h6>Row:</h6>
              <input placeholder="00" id="first_name" type="text"   className="validate in"></input>
            </div>
            <div className="col s2 pl-1">
              <h6>Column:</h6>
              <input placeholder="00" id="first_name" type="text" className="   validate in"></input>
            </div>
            <div className="col s2 offset-s4">
              <h6>Row:</h6>
              <input placeholder="00" id="first_name" type="text"   className="validate in"></input>
            </div>
            <div className="col s2 pl-1">
              <h6>Column:</h6>
              <input placeholder="00" id="first_name" type="text" className="   validate in"></input>
            </div>
          </div>
        </form>
      </div>
    </>
    
  
  )    
}

export default Game;