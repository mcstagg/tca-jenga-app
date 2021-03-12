import React from 'react';

const Game = (props) => {
  
  return (  
    
    <>
      <div className="row marquis-mt">
        <div className="col s5 m5 p-0">
          <div className="marquis card-panel light-blue lighten-1 center blue-buttons">
            <h2 className="white-text player">Mike</h2>
          </div>
        </div>
        <div className="col s2 p-0">
          <div className="marquis card-panel blue darken-1 vs">
            <h2 className="white-text vs">VS</h2>
          </div>
        </div>
        <div className="col s5 p-0">
          <div className="marquis card-panel light-blue lighten-1 center blue-buttons">
            <h2 className="white-text player">Travis</h2>
          </div>
        </div>
      </div>

      <div>
        <form>
          <h1 className="center mt-quarter">Mike's Turn</h1>
          <div className="row center">
            <h5 className="col s4 offset-s1 mt-0">Removed From:</h5>
            <h5 className="col s4 offset-s2 mt-0">Replaced On:</h5>
          </div>

          <div className="row center">
            <div className="col s2 offset-s1">
              <h6>Row:</h6>
              <input placeholder="00" id="first_name" type="text"   className="center validate in"></input>
            </div>
            <div className="col s2 pl-1">
              <h6>Column:</h6>
              <input placeholder="00" id="first_name" type="text" className="center validate in"></input>
            </div>
            <div className="col s2 offset-s2">
              <h6>Row:</h6>
              <input placeholder="00" id="first_name" type="text"   className="validate in center"></input>
            </div>
            <div className="col s2 pl-1">
              <h6>Column:</h6>
              <input placeholder="00" id="first_name" type="text" className="   validate in center"></input>
            </div>
          </div>
          <div className="row">
            <div className="col s6 center">
              <h5>Height of Tower:</h5>
              <h1 className="mb-quarter mt-half">27</h1>
            </div>
            <div className="col s6 center">
              <h5>Blocks Replaced:</h5>
              <h1 className="mb-quarter mt-half">29</h1>
            </div>
          </div>
        </form>
      </div>

      <div className="row mt-half center">

        <div className="col s12 m4 p-0 center">
          <div className="clocks card-panel light-blue lighten-1 center">
            <h5 className="clock">Game Clock</h5>
            <h3 className="white-text center time">00:41:44</h3>
          </div>
        </div>

        <div className="col s12 m4 p-0 center">
          <div className="clocks card-panel blue darken-1 center">
            <h5 className="clock">Move Timer</h5>
            <h3 className="white-text time">00:04:20</h3>
          </div>
        </div>

        <div className="col s12 m4 p-0 center">
          <div className="clocks card-panel light-blue lighten-1 center">
            <h5 className="clock">Total Time</h5>
            <h3 className="white-text time">00:18:88</h3>
          </div>
        </div>
        
      </div>
    </>
  )    
}

export default Game;