import React from "react";
import "./materialize.css";
import "./App.css";
import { useState, useEffect } from "react";

const Table = ({ gamesPlayed }) => {
  const [sortedPlayerStats, setSortedPlayerStats] = useState([]);

  useEffect(() => {
    let playerStats = {}; // => { "mike" => {wins: 1, loses: 2}, "tom" => {} }

    gamesPlayed.map((game) => {
      let winnerName = game.winnerPlayer.name;
      if (!playerStats[winnerName]) {
        playerStats[winnerName] = { name: winnerName, wins: 0, loses: 0 };
      }

      let winnerStats = playerStats[winnerName];
      winnerStats.wins += 1;

      let loserName = game.loserPlayer.name;
      if (!playerStats[loserName]) {
        playerStats[loserName] = { name: loserName, wins: 0, loses: 0 };
      }

      let loserStats = playerStats[loserName];
      loserStats.loses += 1;
    });

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
            <td>x%</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
