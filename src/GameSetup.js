import React from 'react';
import Leader from './Leader';
import SetupForm from './SetupForm';
import './App.css';

const GameSetup = () => {
  return (
    <>
      <Leader h4text="Game Setup" h4textcol="col s6 m5" moveButton={<a href="/gameplay" className={`waves-effect waves-light btn-large col s6 m3 offset-s3-m5 valign-wrapper purple lighten-1 buttons`}>START GAME<i className="large material-icons"></i></a>}/>
      <SetupForm />
      <Leader h4text="Prepare for Jenga!" h4textcol="col s8" atts="pl-2" moveButton={<a href="/gameplay" className={`waves-effect waves-light btn-large col s6 m3 offset-s3-m5 valign-wrapper purple lighten-1 buttons`}>START GAME<i className="large material-icons"></i></a>} />
    </>
  )
}

export default GameSetup;