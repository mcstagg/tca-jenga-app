import React from 'react';

const Results = (props) => {
  
  return (
    <div className="mt-half">
    <div className="results card-panel light-blue lighten-1 center">
      <h2 className="white-text results">Winner! Mike</h2>
    </div>
    <div className="row">
      <h4 className="col s9">Mike's Stats</h4>
    </div>
    <table className="">
    <tbody>
      <tr className="post-text">
        <td className="post-stats">
          Total Player Time : 00:40:02
        </td>
        <td className="post-stats">
          Number of Moves: 32
        </td>
      </tr>
      </tbody>
    </table>

    <div className="results p-2 card-panel purple lighten-1 center">
      <h2 className="white-text results">Loser!  Travis</h2>
    </div>
    <div className="row">
      <h4 className="col s9">Travis's Stats</h4>
    </div>
    <table className="">
      <tbody>
      <tr className="post-text">
        <td className="post-stats">
          Total Player Time : 00:22:12
        </td>
        <td className="post-stats">
          Number of Moves: 32
        </td>
      </tr>
      </tbody>
    </table>

    <div className="results p-2 card-panel deep-orange darken-1 center">
      <h2 className="results white-text">JENGA!</h2>
    </div>

    <div className="row">
      <h4 className="col s9">Game Stats</h4>
    </div>

    <table className="mb-quarter">
      <tbody>
      <tr className="post-text">
        <td className="post-stats">
          Total Game Time: 01:22:14
        </td>
        <td className="post-stats">
          Total Moves: 64
        </td>
      </tr>
      <tr className="post-text">
        <td className="post-stats">
          Max Tower Height: 39
        </td>
        <td className="post-stats">
          JENGA Caused By: Travis
        </td>
      </tr>
      <tr className="post-text">
        <td className="post-stats">
          Block Was Pulled From: Col 3 Row 9
        </td>
        <td className="post-stats">
          Attempt Placement: Row Col 2 Row 39
        </td>
      </tr>
      </tbody>
    </table>
    </div>
  )    
}

export default Results;