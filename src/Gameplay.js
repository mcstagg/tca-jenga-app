import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Game from './Game';

const Gameplay = () => {

  const moveHandler = () => {
   alert("Please enter row and coloumn move data.")
  }

  const jengaHandler = () => {
    alert("Is the game over?")
    alert("who caused the Jenga?")
  }

  const quitHandler = () => {
    alert("Are you sure you want to quit the game?")
  }

  return (
    <>
      <Header h4text="Gameplay" h4textcol="col s3 m3" att="game-head" atts="game-pad htext-hide" moveButton={<a href="/gameplay" className={`waves-effect waves-light btn-large col s4 sm4 m3 valign-wrapper light-blue lighten-1 ml-0 blue-buttons`} onClick={moveHandler}>MOVE<i className="large material-icons"></i></a>} jengaButton={<a href="/postGame" className={`waves-effect waves-light btn-large col s4 sm4 m3 valign-wrapper deep-orange buttons`} onClick={jengaHandler}>JENGA!<i className="large material-icons"></i></a>} quitButton={<a href="/" className={`waves-effect waves-light btn-large col s4 sm4 m3 valign-wrapper purple lighten-1 buttons`} onClick={quitHandler}>QUIT<i className="large material-icons"></i></a>} />
      <Game />
      <Footer h4text="Gameplay" h4textcol="col s3 m3" att="game-head" atts="htext-hide game-pad" moveButton={<a href="/gameplay" className={`waves-effect waves-light btn-large col s4 sm4 m3 valign-wrapper light-blue lighten-1 ml-0 blue-buttons`} onClick={moveHandler}>MOVE<i className="large material-icons"></i></a>} jengaButton={<a href="/postGame" className={`waves-effect waves-light btn-large col s4 sm4 m3 valign-wrapper deep-orange buttons`} onClick={jengaHandler}>JENGA!<i className="large material-icons"></i></a>} quitButton={<a href="/" className={`waves-effect waves-light btn-large col s4 sm4 m3 valign-wrapper purple lighten-1 buttons`} onClick={quitHandler}>QUIT<i className="large material-icons"></i></a>} />
    </>
  )
}

export default Gameplay;