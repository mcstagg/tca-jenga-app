import { React, useState, useRef } from "react";
import JengaModal from "./JengaModal";
import GameClock from "./GameClock";
import MoveClock from "./MoveClock";
import TotalClock from "./TotalClock";
import { useHistory } from "react-router-dom";

const Game = ({ players, game, setGame }) => {
  const history = useHistory();
  const [modalShow, setModalShow] = useState(false);
  const [removedFromRow, setRemovedFromRow] = useState("");
  const [removedFromCol, setRemovedFromCol] = useState("");
  const [replacedOnRow, setReplacedOnRow] = useState("");
  const [replacedOnCol, setReplacedOnCol] = useState("");
  const [towerHeight, setTowerHeight] = useState(18);
  const [fullRow, setFullRow] = useState(1);
  const [blocksReplaced, setBlocksReplaced] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(players[0]);
  const gameTime = useRef("");

  //Handles the move event on click of move button
  const moveHandler = () => {
    setGame({
      ...game,
      moves: [
        ...game.moves,
        {
          player: currentPlayer,
          removeFrom: [parseInt(removedFromRow), parseInt(removedFromCol)],
          replacedOn: [parseInt(replacedOnRow), parseInt(replacedOnCol)],
        },
      ],
    });

    // reset removeFrom fields
    setRemovedFromRow("");
    setRemovedFromCol("");

    // reset replacedOn fields
    setReplacedOnRow("");
    setReplacedOnCol("");

    // increment height of tower
    setFullRow(fullRow + 1);
    if (fullRow % 3 == 0) {
      setTowerHeight(towerHeight + 1);
    }

    // increment blocks replaced
    setBlocksReplaced(blocksReplaced + 1);

    // switch player
    if (currentPlayer.name === players[0].name) {
      setCurrentPlayer(players[1]);
    } else {
      setCurrentPlayer(players[0]);
    }
  };

  // Handles the Jenga event on click of the Jenga button
  const jengaHandler = () => {
    // alert("Is the game over?");
    // alert("who caused the Jenga?");

    // show modal
    setModalShow(true);
  };

  const jengaModalClickHandler = () => {
    setGame({
      ...game,
      gameTime: gameTime.current,
      towerHeight: towerHeight,
      winnerPlayer: players[0],
      loserPlayer: players[1],
    });
    history.push("/postGame");
  };

  const setGameTime = (time) => {
    gameTime.current = time;
  };

  //Handles the quit event on click of the Quit button
  const quitHandler = () => {
    alert("Are you sure you want to quit the game?");
  };

  return (
    <>
      <JengaModal show={modalShow} player1Name={players[0].name} player2Name={players[1].name} onHide={() => setModalShow(false)} />
      <div className={`row blue darken-1 header mbp valign-wrapper game-head`}>
        <h5 className={`col s3 m3 header-text game-pad htext-hide`}>
          Gameplay
        </h5>

        <button
          className={`waves-effect waves-light btn-large col s4 sm4 m3 valign-wrapper light-blue lighten-1 ml-0 blue-buttons`}
          onClick={moveHandler}
        >
          MOVE
          <i className="large material-icons"></i>
        </button>

        <button
          className={`waves-effect waves-light btn-large col s4 sm4 m3 valign-wrapper deep-orange buttons`}
          onClick={jengaHandler}
        >
          JENGA!
          <i className="large material-icons"></i>
        </button>

        <a
          href="/"
          className={`waves-effect waves-light btn-large col s4 sm4 m3 valign-wrapper purple lighten-1 buttons`}
          onClick={quitHandler}
        >
          QUIT
          <i className="large material-icons"></i>
        </a>
      </div>

      <div className="row marquis-mt">
        <div className="col s5 m5 names">
          <div className="card-panel light-blue lighten-1 blue-buttons center names2">
            <h4 className="white-text names3">{players[0].name}</h4>
          </div>
        </div>

        <div className="col s2 m2 names">
          <div className="card-panel blue darken-1 center names2">
            <h4 className="white-text names3">VS</h4>
          </div>
        </div>

        <div className="col s5 m5 names">
          <div className="card-panel light-blue lighten-1 blue-buttons center names2">
            <h4 className="white-text names3">{players[1].name}</h4>
          </div>
        </div>
      </div>

      <div>
        <form>
          <h3 className="center turn">{currentPlayer.name}'s Turn</h3>
          <div className="row center">
            <h5 className="col s4 offset-s1 from-on">Removed From:</h5>
            <h5 className="col s4 offset-s2 from-on">Replaced On:</h5>
          </div>

          <div className="row center">
            <div className="col s3 rc">
              <h6 className="row-label1">Row:</h6>
              <input
                placeholder="00"
                id="first_name"
                type="text"
                className="center validate in"
                value={removedFromRow}
                onChange={(e) => setRemovedFromRow(e.target.value)}
              />
            </div>

            <div className="col s3 rc">
              <h6 className="col-label1">Column:</h6>
              <input
                placeholder="00"
                id="first_name"
                type="text"
                className="center validate in"
                value={removedFromCol}
                onChange={(e) => setRemovedFromCol(e.target.value)}
              />
            </div>

            <div className="col s3 rc">
              <h6 className="row-label2">Row:</h6>
              <input
                placeholder="00"
                id="first_name"
                type="text"
                className="validate in center"
                value={replacedOnRow}
                onChange={(e) => setReplacedOnRow(e.target.value)}
              />
            </div>

            <div className="col s3 rc">
              <h6 className="col-label2">Column:</h6>
              <input
                placeholder="00"
                id="first_name"
                type="text"
                className="validate in center"
                value={replacedOnCol}
                onChange={(e) => setReplacedOnCol(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col s6 center">
              <h5>Height of Tower:</h5>
              <h4 className="numbers">Row: {towerHeight}</h4>
            </div>
            <div className="col s6 center">
              <h5>Blocks Replaced:</h5>
              <h4 className="numbers">{blocksReplaced}</h4>
            </div>
          </div>
        </form>
      </div>

      <div className="row center mt-half">
        <div className="col s12 m4 p-0 center">
          <div className="clocks card-panel light-blue lighten-1 center">
            <h5 className="clock">Game Clock</h5>
            <h3 className="white-text center time">
              <GameClock setTime={setGameTime} />
            </h3>
          </div>
        </div>

        <div className="col s12 m4 p-0 center">
          <div className="clocks card-panel blue darken-1 center">
            <h5 className="clock">Move Timer</h5>
            <h3 className="white-text time">
              <MoveClock />
            </h3>
          </div>
        </div>

        <div className="col s12 m4 p-0 center">
          <div className="clocks card-panel light-blue lighten-1 center">
            <h5 className="clock">Total Time</h5>
            <h3 className="white-text time">
              <TotalClock />
            </h3>
          </div>
        </div>
      </div>

      <div className={`row blue darken-1 footer mbp valign-wrapper game-head`}>
        <h5 className={`"col s3 m3 footer-text htext-hide game-pad`}>
          Gameplay
        </h5>
        <button
          className={`waves-effect waves-light btn-large col s4 sm4 m3 valign-wrapper light-blue lighten-1 ml-0 blue-buttons`}
          onClick={moveHandler}
        >
          MOVE
          <i className="large material-icons"></i>
        </button>
        <button
          className={`waves-effect waves-light btn-large col s4 sm4 m3 valign-wrapper deep-orange buttons`}
          onClick={jengaHandler}
        >
          JENGA!
          <i className="large material-icons"></i>
        </button>
        <a
          href="/"
          className={`waves-effect waves-light btn-large col s4 sm4 m3 valign-wrapper purple lighten-1 buttons`}
          onClick={quitHandler}
        >
          QUIT
          <i className="large material-icons"></i>
        </a>
      </div>
    </>
  );
};

export default Game;
