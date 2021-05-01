import React from 'react';

const Results = ({ players, game }) => {
  let { moves, gameTime, towerHeight, winnerPlayer, loserPlayer } = game;

  let numMovesPlayer1 = 0;
  moves.map(
    move => move.player.name === players[0].name && numMovesPlayer1++
  );

  let numMovesPlayer2 = 0;
  moves.map(
    move => move.player.name === players[1].name && numMovesPlayer2++
  );

  return (

    <div className="">

      <div className="results card-panel light-blue lighten-1 center">
        <h3 className="white-text results">
          Winner! {winnerPlayer.name}
        </h3>
      </div>

      <div classNames="row">
        <h4 className="col s12 indi-stats">
          {winnerPlayer.name}'s Stats
        </h4>
      </div>

      <table className="">
        <tbody>
          <tr className="post-text">
            <td className="post-stats">
              Player Time : 00:40:02
            </td>
          </tr>
          <tr className="post-text">
            <td className="post-stats">
              Number of Moves: {numMovesPlayer1}
            </td>
          </tr>
        </tbody>
      </table>
  
      <div className="results2 p-2 card-panel purple lighten-1 center">
        <h3 className="white-text results mt-0">
          Loser! {loserPlayer.name}
        </h3>
      </div>

      <div className="row">
        <h4 className="col s12 indi-stats">
          {loserPlayer.name}'s Stats
        </h4>
      </div>

      <table className="">
        <tbody>
          <tr className="post-text">
            <td className="post-stats">
              Player Time : 00:22:12
            </td>
          </tr>
          <tr className="post-text">
            <td className="post-stats">
              Number of Moves: {numMovesPlayer2}
            </td>
          </tr>
        </tbody>
      </table>
  
      <div className="results2 p-2 card-panel deep-orange darken-1 center">
        <h3 className="results white-text mt-0">
          JENGA!
        </h3>
      </div>
  
      <div className="row">
        <h4 className="col s12 indi-stats">
          Game Stats
        </h4>
      </div>
  
      <table className="">
        <tbody>
          <tr className="post-text">
            <td className="post-stats">
              Game Time: {gameTime}
            </td>
          </tr>
          <tr className="post-text">
            <td className="post-stats">
              Total Moves: {moves.length}
            </td>
          </tr>
          <tr className="post-text">
            <td className="post-stats">
              Max Tower Height: {towerHeight}
            </td>
          </tr>
          <tr className="post-text">
            <td className="post-stats">
              JENGA Caused By: {loserPlayer.name}
            </td>
          </tr>
          <tr className="post-text">
            <td className="post-stats">
              Jenga Pulled From: Col 3 Row 9
            </td>
          </tr>
          <tr className="post-text">
            <td className="post-stats">
              Attempted: Row Col 2 Row 39
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )    
}

export default Results;