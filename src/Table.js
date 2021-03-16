import React from 'react';
import './materialize.css';
import './App.css';

const Table = (props) => {
  
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
        <tr>
          <td>1st</td>
          <td>Mike</td>
          <td>144</td>
          <td>45</td>
          <td>87%</td>
          <td>42</td>
          <td>11</td>
          <td>125</td>
        </tr>
        <tr>
          <td>2nd</td>
          <td>Travis</td>
          <td>101</td>
          <td>54</td>
          <td>73%</td>
          <td>44</td>
          <td>8</td>
          <td>132</td>
        </tr>
        <tr>
          <td>3rd</td>
          <td>John J</td>
          <td>88</td>
          <td>60</td>
          <td>68%</td>
          <td>38</td>
          <td>7</td>
          <td>90</td>
        </tr>
        <tr>
          <td>4th</td>
          <td>Haldor</td>
          <td>82</td>
          <td>58</td>
          <td>64%</td>
          <td>44</td>
          <td>6</td>
          <td>105</td>
        </tr>
        <tr>
          <td>5th</td>
          <td>Danny</td>
          <td>79</td>
          <td>56</td>
          <td>60%</td>
          <td>45</td>
          <td>9</td>
          <td>84</td>
        </tr>
        <tr>
          <td>6th</td>
          <td>Eric J</td>
          <td>77</td>
          <td>59</td>
          <td>58%</td>
          <td>39</td>
          <td>4</td>
          <td>101</td>
        </tr>
        <tr>
          <td>7th</td>
          <td>Jeremey</td>
          <td>64</td>
          <td>55</td>
          <td>52%</td>
          <td>42</td>
          <td>3</td>
          <td>112</td>
        </tr>
        <tr>
          <td>8th</td>
          <td>Scotty</td>
          <td>75</td>
          <td>75</td>
          <td>50%</td>
          <td>41</td>
          <td>5</td>
          <td>121</td>
        </tr>
        <tr>
          <td>9th</td>
          <td>Mark</td>
          <td>68</td>
          <td>62</td>
          <td>45%</td>
          <td>37</td>
          <td>3</td>
          <td>94</td>
        </tr>
        <tr>
          <td>10th</td>
          <td>Terje</td>
          <td>54</td>
          <td>65</td>
          <td>42%</td>
          <td>33</td>
          <td>4</td>
          <td>88</td>
        </tr>
      </tbody>
    </table>
  )    
}

export default Table;