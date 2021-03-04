import React from 'react';

const Results = (props) => {
  
  return (
    <>
    <div className="results p-2 mt-1 card-panel light-blue lighten-1 center">
      <h2 className="white-text">Winner!  Mike</h2>
    </div>
    <div className="row">
      <h5 className="col s6">Mike's Stats</h5>
    </div>
    <table className="">
      <tr className="">
        <td>
          <h6>Total Player Time : 00:40:02</h6>
        </td>
        <td>
          <h6>Number of Moves: 32</h6>
        </td>
      </tr>
    </table>

    <div className="results p-2 card-panel purple lighten-1 center">
      <h2 className="white-text">Loser!  Travis</h2>
    </div>
    <div className="row">
      <h5 className="col s6">Travis's Stats</h5>
    </div>
    <table className="">
      <tr className="">
        <td>
          <h6>Total Player Time : 00:22:12</h6>
        </td>
        <td>
          <h6>Number of Moves: 32</h6>
        </td>
      </tr>
    </table>

    <div className="results p-2 card-panel deep-orange darken-1 center">
      <h2 className="white-text">JENGA!</h2>
    </div>

    <div className="row">
      <h5 className="col s6">Game Stats</h5>
    </div>

    <table className="">
      <tr className="">
        <td>
          <h6>Total Game Time: 01:22:14</h6>
        </td>
        <td>
          <h6>Total Moves: 64</h6>
        </td>
      </tr>
      <tr>
        <td>
          <h6>Max Tower Height: 39</h6>
        </td>
        <td>
          <h6>JENGA Caused By: Travis</h6>
        </td>
      </tr>
      <tr>
        <td>
          <h6>Block Was Pulled From: Col 3 Row 9</h6>
        </td>
        <td>
          <h6>Attempt Placement: Row Col 2 Row 39</h6>
        </td>
      </tr>
    </table>
    </>
  )    
}

export default Results;