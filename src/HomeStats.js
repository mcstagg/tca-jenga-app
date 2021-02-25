import React from 'react';
import jenga from './tower.PNG';
import './materialize.css';
import './App.css';

const HomeStats = () => {
  return (
    <>
    <div className="row blue darken-1 top-bar">
        <div className="col s1">1</div>
        <div className="col s1">2</div>
        <div className="col s1">3</div>
        <div className="col s1">4</div>
        <div className="col s1">5</div>
        <div className="col s1">6</div>
        <div className="col s1">7</div>
        <div className="col s1">8</div>
        <div className="col s1">9</div>
        <div className="col s1">10</div>
        <div className="col s1">11</div>
        <div className="col s1">12</div>
      </div>

      <div className="row deep-orange darken-1 header">
        <img src={jenga} alt="jenga" className="col s3 header-towers" />
        <h1 className="col s6 white-text header-text">Jenga <br/> Companion</h1>
        <img src={jenga} alt="jenga" className="col s3 header-towers" />
      </div>

      <div className="row blue darken-1 leaderboard-header">
        <h4 className="col s6 lb-header-text">Leaderboard</h4>
        <a href="/GameSetup.js" className="waves-effect waves-light btn col 2 offset-s2"><i className="material-icons right">jenga!</i>Play</a>
      </div>

      <table>
        <thead>
          <tr>
              <th>Ranking</th>
              <th>Player</th>
              <th>Wins</th>
              <th>Loses</th>
              <th>Win %</th>
              <th>Loss %</th>
              <th>Max Height</th>
              <th>Win Streak</th>
              <th>Days Playing</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Top Player</td>
            <td>Mike</td>
            <td>144</td>
            <td>45</td>
            <td>87%</td>
            <td>13%</td>
            <td>42 Rows</td>
            <td>11 Games</td>
            <td>125 Days</td>
          </tr>
          <tr>
            <td>2nd Place</td>
            <td>Travis</td>
            <td>101</td>
            <td>54</td>
            <td>73%</td>
            <td>27%</td>
            <td>44 Rows</td>
            <td>8 Games</td>
            <td>132 Days</td>
          </tr>
          <tr>
            <td>3rd Place</td>
            <td>John J</td>
            <td>88</td>
            <td>60</td>
            <td>68%</td>
            <td>32%</td>
            <td>38 Rows</td>
            <td>7 Games</td>
            <td>90 Days</td>
          </tr>
          <tr>
            <td>3rd Place</td>
            <td>John J</td>
            <td>88</td>
            <td>60</td>
            <td>68%</td>
            <td>32%</td>
            <td>38 Rows</td>
            <td>7 Games</td>
            <td>90 Days</td>
          </tr>
          <tr>
            <td>3rd Place</td>
            <td>John J</td>
            <td>88</td>
            <td>60</td>
            <td>68%</td>
            <td>32%</td>
            <td>38 Rows</td>
            <td>7 Games</td>
            <td>90 Days</td>
          </tr>
          <tr>
            <td>3rd Place</td>
            <td>John J</td>
            <td>88</td>
            <td>60</td>
            <td>68%</td>
            <td>32%</td>
            <td>38 Rows</td>
            <td>7 Games</td>
            <td>90 Days</td>
          </tr>
          <tr>
            <td>3rd Place</td>
            <td>John J</td>
            <td>88</td>
            <td>60</td>
            <td>68%</td>
            <td>32%</td>
            <td>38 Rows</td>
            <td>7 Games</td>
            <td>90 Days</td>
          </tr>
          <tr>
            <td>3rd Place</td>
            <td>John J</td>
            <td>88</td>
            <td>60</td>
            <td>68%</td>
            <td>32%</td>
            <td>38 Rows</td>
            <td>7 Games</td>
            <td>90 Days</td>
          </tr>
          <tr>
            <td>3rd Place</td>
            <td>John J</td>
            <td>88</td>
            <td>60</td>
            <td>68%</td>
            <td>32%</td>
            <td>38 Rows</td>
            <td>7 Games</td>
            <td>90 Days</td>
          </tr>
          <tr>
            <td>3rd Place</td>
            <td>John J</td>
            <td>88</td>
            <td>60</td>
            <td>68%</td>
            <td>32%</td>
            <td>38 Rows</td>
            <td>7 Games</td>
            <td>90 Days</td>
          </tr>
        </tbody>
      </table>

      <div className="row blue darken-1 leaderboard-header">
        <h4 className="col s6 lb-header-text">Ready to Start?</h4>
        <a className="waves-effect waves-light btn col 2 offset-s2"><i className="material-icons right">jenga!</i>Play</a>
      </div>
    </>
  )
}

export default HomeStats;