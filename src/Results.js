import React from 'react';

const Results = (props) => {
  
  return (
    <div className="">
    <div className="results card-panel light-blue lighten-1 center">
      <h3 className="white-text results">Winner! Mike</h3>
    </div>
    <div className="row">
      <h4 className="col s12 indi-stats">Mike's Stats</h4>
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
          Number of Moves: 32
        </td>
      </tr>
      </tbody>
    </table>

    <div className="results2 p-2 card-panel purple lighten-1 center">
      <h3 className="white-text results mt-0">Loser! Travis</h3>
    </div>
    <div className="row">
      <h4 className="col s12 indi-stats">Travis's Stats</h4>
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
          Number of Moves: 32
        </td>
      </tr>
      </tbody>
    </table>

    <div className="results2 p-2 card-panel deep-orange darken-1 center">
      <h3 className="results white-text mt-0">JENGA!</h3>
    </div>

    <div className="row">
      <h4 className="col s12 indi-stats">Game Stats</h4>
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
          Total Moves: 64
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