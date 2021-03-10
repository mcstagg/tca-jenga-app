import React from 'react';

const Game = (props) => {
  
  return (  
    
    <>
      <div className="row">
        <div className="col s5 m5 p-0">
          <div className="p-2 card-panel light-blue lighten-1 center blue-buttons">
            <h2 className="white-text">Mike</h2>
          </div>
        </div>
        <div className="col s2 p-0">
          <div className="p-2 card-panel blue darken-1">
            <h2 className="white-text">VS</h2>
          </div>
        </div>
        <div className="col s5 p-0">
          <div className="p-2 card-panel light-blue lighten-1 center blue-buttons">
            <h2 className="white-text">Travis</h2>
          </div>
        </div>
      </div>

      <div>
        <form>
          <h1 className="center mt-half" >Mike's Turn</h1>
          <div className="row center">
            <h5 className="col s4 offset-s1">Removed From:</h5>
            <h5 className="col s4 offset-s2">Replaced On:</h5>
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
              <h1>27</h1>
            </div>
            <div className="col s6 center">
              <h5>Blocks Replaced:</h5>
              <h1>29</h1>
            </div>
          </div>
        </form>
      </div>

      <div className="row mt-half center">

        <div className="col s12 m4 p-0 center">
          <div className="clocks card-panel light-blue lighten-1 center">
            <h5>Game Clock</h5>
            <h3 className="white-text center">00:41:44</h3>
          </div>
        </div>

        <div className="col s12 m4 p-0 center">
          <div className="clocks card-panel blue darken-1 center">
            <h5>Move Timer</h5>
            <h3 className="white-text">00:04:20</h3>
          </div>
        </div>

        <div className="col s12 m4 p-0 center">
          <div className="clocks card-panel light-blue lighten-1 center">
            <h5>Total Time</h5>
            <h3 className="white-text">00:18:88</h3>
          </div>
        </div>
        
      </div>
    </>
  )    
}

export default Game;