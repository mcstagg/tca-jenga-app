import jenga from './Jenga.png';
import './materialize.css';

function App() {
  return (
    <div>
      <div class="row">
      <div class="col s1">1</div>
      <div class="col s1">2</div>
      <div class="col s1">3</div>
      <div class="col s1">4</div>
      <div class="col s1">5</div>
      <div class="col s1">6</div>
      <div class="col s1">7</div>
      <div class="col s1">8</div>
      <div class="col s1">9</div>
      <div class="col s1">10</div>
      <div class="col s1">11</div>
      <div class="col s1">12</div>
      </div>
      <div class="row">
      <img src={jenga} alt="jenga" class="col s4" />
      <h1 class="col s1">Jenga Companion</h1>
      </div>
      <div class="row">
      <h5 class="col s2">Leaderboard</h5>
      </div>
      <table>
        <thead>
          <tr>
              <th>Name</th>
              <th>Games Won</th>
              <th>Win %</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Mike</td>
            <td>144</td>
            <td>87%</td>
          </tr>
          <tr>
            <td>Travis</td>
            <td>101</td>
            <td>76%</td>
          </tr>
          <tr>
            <td>John J</td>
            <td>88</td>
            <td>69%</td>
          </tr>
        </tbody>
      </table>
      <div class="row">
      <div class="col s9">
      <a class="waves-effect waves-light btn"><i class="material-icons right">jenga</i>Play</a>
      </div>
      </div>
    </div>
  );
}

export default App;
