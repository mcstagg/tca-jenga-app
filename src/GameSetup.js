import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SetupForm from './SetupForm';
import './App.css';
import Modal from './Modal';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

const GameSetup = () => {

  const history = useHistory();

  const [modalShow, setModalShow] = React.useState(false);
  const [formIsValid, setFormIsValid] = React.useState(false);

  const clickHandler = () => {

    let numChecked = 0;
    players.map(player => player.checked && numChecked++);
    if (numChecked < 2) {
      setModalShow(true);
    } else {
      history.push('/gameplay');
    }
  }

  const [players, setPlayers] = React.useState([]);

  const handleChecked = (index, checked) => {
    let newPlayers = players.slice();
    newPlayers[index].checked=checked;
    setPlayers(newPlayers);
  }

  const addPlayer = (playerName) => {
    setPlayers(players.concat({name: playerName, checked: false}));
  }

  return (
    <>
      <Header h4text="Game Setup" h4textcol="col s6 m9" atts="lb-pad head-text" moveButton={<a className={`waves-effect waves-light btn-large col s6 m3 offset-s3-m5 valign-wrapper purple lighten-1 buttons`} onClick={clickHandler}>START GAME<i className="large material-icons"></i></a>}/>

      <Modal show={modalShow} onHide={() => setModalShow(false)} />

      <SetupForm addPlayer={addPlayer} handleChecked={handleChecked} players={players}/>

      <Footer h4text="Prepare to Jenga!" h4textcol="col s8 m9" atts="prepare" moveButton={<a className={`waves-effect waves-light btn-large col s4 m3 valign-wrapper purple lighten-1 buttons`} onClick={clickHandler}><i className="material-icons play">play_arrow</i></a>} />
    </>
  )
}

export default GameSetup;