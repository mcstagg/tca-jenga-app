import React from 'react';
import Leader from './Leader';
import Game from './Game';

const Gameplay = () => {

  return (
    <>
      <Leader h4text="Gameplay" h4textcol="col s3 m3" atts="hide-on-small-only game-pad" moveButton={<a href="/gameplay" className={`ml-1 waves-effect waves-light btn-large col s4 m3 valign-wrapper light-blue lighten-1 blue-buttons`}>MOVE<i className="large material-icons"></i></a>}  jengaButton={<a href="/postGame" className={`waves-effect waves-light btn-large col s4 m3 valign-wrapper deep-orange buttons`}>JENGA!<i className="large material-icons"></i></a>} quitButton={<a href="/" className={`waves-effect waves-light btn-large col s4 m3 valign-wrapper purple lighten-1 buttons`}>QUIT<i className="large material-icons"></i></a>} />
      <Game />
      <Leader h4text="Gameplay" h4textcol="col s3 m3" atts="hide-on-small-only game-pad" moveButton={<a href="/gameplay" className={`waves-effect waves-light btn-large col s4 m3 offset-s3 valign-wrapper light-blue lighten-1 ml-0 blue-buttons`}>MOVE<i className="large material-icons"></i></a>} jengaButton={<a href="/postGame" className={`waves-effect waves-light btn-large col s4 m3 valign-wrapper deep-orange buttons`}>JENGA!<i className="large material-icons"></i></a>} quitButton={<a href="/" className={`waves-effect waves-light btn-large col s4 m3 valign-wrapper purple lighten-1 buttons`}>QUIT<i className="large material-icons"></i></a>} />
    </>
  )
}

export default Gameplay;