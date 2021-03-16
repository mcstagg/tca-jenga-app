import React from 'react';

const Game = (props) => {
  
  return (  
    
    <>
      <div className="row marquis-mt">
        <div className="col s5 m5 names">
          <div className="card-panel light-blue lighten-1 blue-buttons center names2">
            <h4 className="white-text names3">Mike</h4>
          </div>
        </div>
        <div className="col s2 m2 names">
          <div className="card-panel blue darken-1 center names2">
            <h4 className="white-text names3">VS</h4>
          </div>
        </div>
        <div className="col s5 m5 names">
          <div className="card-panel light-blue lighten-1 blue-buttons center names2">
            <h4 className="white-text names3">Travis</h4>
          </div>
        </div>
      </div>

      <div>
        <form>
          <h3 className="center turn">Mike's Turn</h3>
          <div className="row center">
            <h5 className="col s4 offset-s1 from-on">Removed From:</h5>
            <h5 className="col s4 offset-s2 from-on">Replaced On:</h5>
          </div>

          <div className="row center">
            <div className="col s3 rc">
              <h6 className="row-label1">Row:</h6>
              <input placeholder="00" id="first_name" type="text" className="center validate in"></input>
            </div>
            <div className="col s3 rc">
              <h6 className="col-label1">Column:</h6>
              <input placeholder="00" id="first_name" type="text" className="center validate in"></input>
            </div>
            <div className="col s3 rc">
              <h6 className="row-label2">Row:</h6>
              <input placeholder="00" id="first_name" type="text"   className="validate in center"></input>
            </div>
            <div className="col s3 rc">
              <h6 className="col-label2">Column:</h6>
              <input placeholder="00" id="first_name" type="text" className="   validate in center"></input>
            </div>
          </div>
          <div className="row">
            <div className="col s6 center">
              <h5>Height of Tower:</h5>
              <h4 className="numbers">27</h4>
            </div>
            <div className="col s6 center">
              <h5>Blocks Replaced:</h5>
              <h4 className="numbers">29</h4>
            </div>
          </div>
        </form>
      </div>

      <div className="row center mt-half">

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