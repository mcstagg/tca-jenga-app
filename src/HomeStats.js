import React from 'react';
import jenga from './tower.PNG';
import { Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';

const HomeStats = () => {
  return (
    <>
      <div className="row blue darken-1 leaderboard-header valign-wrapper">
        <h4 className="col s3 lb-header-text m-0">Leaderboard</h4>
        <a href="/gameSetup" className="waves-effect waves-light btn col s3 offset-s6">Play JENGA!<i className="large material-icons">play_arrow</i></a>
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
        <a href="/gameSetup" className="waves-effect waves-light btn col 2 offset-s2"><i className="material-icons right">jenga!</i>Play</a>
      </div>
    </>
  )    
}   

export default HomeStats;