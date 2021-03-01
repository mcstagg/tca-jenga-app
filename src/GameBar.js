import React from 'react';

const GameBar = (props) => {
  
  return (
    <div className="row blue darken-1 leaderboard-header">
      <a href="/postGame" className="waves-effect waves-light btn-large col s3 offset-s3"><i className="material-icons right"></i>Jenga!</a>
      <a href="/" className="waves-effect waves-light btn-large col s3"><i className="material-icons right"></i>Quit</a>
    </div>
  )    
}

export default GameBar;