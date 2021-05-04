import React from "react";
import "./materialize.css";
import "./App.css";
import { useState, useEffect } from "react";

const Table = ({ gamesPlayed }) => {
  const [sortedPlayerStats, setSortedPlayerStats] = useState([]);

  useEffect(() => {
    let playerStats = {}; // => { "mike" => {wins: 1, loses: 2}, "tom" => {} }

    // fill in playerStats by looping through all games...
    gamesPlayed.map((game) => {

      const defaultStats = {
        wins: 0, loses: 0, maxHeight: 0, winStreak: 0
      };
      
      let winnerName = game.winnerPlayer.name;
      let loserName = game.loserPlayer.name;

      // create stats object for winner and loser if they don't exist
      if (!playerStats[winnerName]) {
        playerStats[winnerName] = {...defaultStats};
      }
      if (!playerStats[loserName]) {
        playerStats[loserName] = {...defaultStats};
      }

      let winnerStats = playerStats[winnerName];
      let loserStats = playerStats[loserName];

      // add win to winner's player stats and loss to loser's stats
      winnerStats.wins += 1;
      loserStats.loses += 1;

      // update maxHeight
      if (winnerStats.maxHeight < game.towerHeight) {
        winnerStats.maxHeight = game.towerHeight;
      }
      if (loserStats.maxHeight < game.towerHeight) {
        loserStats.maxHeight = game.towerHeight;
      }

      // update win streak
      winnerStats.winStreak++;
      loserStats.winStreak = 0;
    });

    // calculate win percentage for each player
    for (var playerName in playerStats) {
      let stats = playerStats[playerName];
      stats.winPercentage = stats.wins / (stats.loses + stats.wins) * 100;
      stats.winPercentage = stats.winPercentage.toFixed(2);
    }

    let sorted = Object.entries(playerStats).sort((a, b) => {
      // a=> ["mike", {...}]; b => ["tom", {...}]
      return b[1].wins - a[1].wins;
    });

    setSortedPlayerStats(sorted);
  }, [gamesPlayed]);

  return (
    <table className="leaderboard">
      <thead>
        <tr className="head-txt">
          <th className="ranking">Ranking</th>
          <th className="player">Player</th>
          <th>Wins</th>
          <th>Loses</th>
          <th>Win %</th>
          <th>Max Height</th>
          <th>Win Streak</th>
          <th>Days Playing</th>
        </tr>
      </thead>
      <tbody className="tbody-txt">
        {sortedPlayerStats.map((element, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{element[0]}</td>
            <td>{element[1].wins}</td>
            <td>{element[1].loses}</td>
            <td>{element[1].winPercentage}%</td>
            <td>{element[1].maxHeight}</td>
            <td>{element[1].winStreak}</td>
            <td>x</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
