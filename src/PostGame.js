import React from 'react';
import Leader from './Leader';

const PostGame = () => {
  return (
    <>
      <Leader text="Post Game" btnlink="./gameplay" btntext="Play Again"/>

      <div>
        <h2>Winner!</h2>
        <h3>Player 1</h3>
      </div>

      <div className="row blue darken-1 leaderboard-header">
        <h4 className="col s6 lb-header-text">Rematch?</h4>
        <a href="/gameplay" className="waves-effect waves-light btn col 2 offset-s2"><i className="material-icons right">jenga!</i>Play</a>
      </div>
    </>
  )
}

export default PostGame;