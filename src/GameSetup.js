import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SetupForm from './SetupForm';
import './App.css';
import PopUp1 from './PopUp1';

const GameSetup = () => {

  const clickHandler = () => {
    alert("Please Select at least 2 players.")
  }

  return (
    <>
      <Header h4text="Game Setup" h4textcol="col s6 m9" atts="lb-pad head-text" moveButton={<a href="/gameplay" className={`waves-effect waves-light btn-large col s6 m3 offset-s3-m5 valign-wrapper purple lighten-1 buttons`} onClick={clickHandler}>START GAME<i className="large material-icons"></i></a>}/>
      <PopUp1 />
      <SetupForm />
      <Footer h4text="Prepare to Jenga!" h4textcol="col s8 m9" atts="prepare" moveButton={<a href="/gameplay" className={`waves-effect waves-light btn-large col s4 m3 valign-wrapper purple lighten-1 buttons`} onClick={clickHandler}><i className="material-icons play">play_arrow</i></a>} />
    </>
  )
}

export default GameSetup;