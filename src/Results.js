import React from 'react';

const Results = ({ players, moves }) => {

  let numMovesPlayer1 = 0;
  moves.map(
    move => move.playerName === players[0].name && numMovesPlayer1++
  );

  let numMovesPlayer2 = 0;
  moves.map(
    move => move.playerName === players[1].name && numMovesPlayer2++
  );

  return (

    <div className="">

      <div className="results card-panel light-blue lighten-1 center">
        <h3 className="white-text results">
          Winner! {players[0].name}
        </h3>
      </div>

      <div className="row">
        <h4 className="col s12 indi-stats">
          {players[0].name}'s Stats
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
              Number of Moves: {1}
            </td>
          </tr>
        </tbody>
      </table>
  
      <div className="results2 p-2 card-panel purple lighten-1 center">
        <h3 className="white-text results mt-0">
          Loser! {players[1].name}
        </h3>
      </div>

      <div className="row">
        <h4 className="col s12 indi-stats">
          {players[1].name}'s Stats
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
              Number of Moves: {2}
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
              Game Time: 01:22:14
            </td>
          </tr>
          <tr className="post-text">
            <td className="post-stats">
              Total Moves: {moves.length}
            </td>
          </tr>
          <tr className="post-text">
            <td className="post-stats">
              Max Tower Height: 39
            </td>
          </tr>
          <tr className="post-text">
            <td className="post-stats">
              JENGA Caused By: Travis
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