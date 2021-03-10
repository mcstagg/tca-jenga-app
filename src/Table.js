import React from 'react';
import './materialize.css';
import './App.css';

const Table = (props) => {
  
  return (
    <table className="tables leaderboard">
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
          <td>4th Place</td>
          <td>Haldor</td>
          <td>82</td>
          <td>58</td>
          <td>64%</td>
          <td>36%</td>
          <td>44 Rows</td>
          <td>6 Games</td>
          <td>105 Days</td>
        </tr>
        <tr>
          <td>5th Place</td>
          <td>Danny</td>
          <td>79</td>
          <td>56</td>
          <td>60%</td>
          <td>40%</td>
          <td>45 Rows</td>
          <td>9 Games</td>
          <td>84 Days</td>
        </tr>
        <tr>
          <td>6th Place</td>
          <td>Eric J</td>
          <td>77</td>
          <td>59</td>
          <td>58%</td>
          <td>42%</td>
          <td>39 Rows</td>
          <td>4 Games</td>
          <td>101 Days</td>
        </tr>
        <tr>
          <td>7th Place</td>
          <td>Jeremey</td>
          <td>64</td>
          <td>55</td>
          <td>52%</td>
          <td>48%</td>
          <td>42 Rows</td>
          <td>3 Games</td>
          <td>112 Days</td>
        </tr>
        <tr>
          <td>8th Place</td>
          <td>Scotty</td>
          <td>75</td>
          <td>75</td>
          <td>50%</td>
          <td>50%</td>
          <td>41 Rows</td>
          <td>5 Games</td>
          <td>121 Days</td>
        </tr>
        <tr>
          <td>9th Place</td>
          <td>Mark</td>
          <td>68</td>
          <td>62</td>
          <td>45%</td>
          <td>55%</td>
          <td>37 Rows</td>
          <td>3 Games</td>
          <td>94 Days</td>
        </tr>
        <tr>
          <td>10th Place</td>
          <td>Terje</td>
          <td>54</td>
          <td>65</td>
          <td>42%</td>
          <td>58%</td>
          <td>33 Rows</td>
          <td>4 Games</td>
          <td>88 Days</td>
        </tr>
      </tbody>
    </table>
  )    
}

export default Table;