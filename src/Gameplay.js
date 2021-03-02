import React from 'react';
import Leader from './Leader';
import Game from './Game';

const Gameplay = () => {

  return (
    <>
      <Leader h4text="Gameplay" h4textcol="col s1" moveButton={<a href="/gameplay" className={`waves-effect waves-light btn-large col s3 offset-s3 valign-wrapper`}>MAKE MOVE<i className="large material-icons"></i></a>}  jengaButton={<a href="/postGame" className={`waves-effect waves-light btn-large col s3 valign-wrapper`}>JENGA!<i className="large material-icons"></i></a>} quitButton={<a href="/" className={`waves-effect waves-light btn-large col s3 valign-wrapper`}>QUIT<i className="large material-icons"></i></a>} />
      <Game />
      <Leader h4text="Gameplay" h4textcol="col s1" moveButton={<a href="/gameplay" className={`waves-effect waves-light btn-large col s3 offset-s3 valign-wrapper`}>MAKE MOVE<i className="large material-icons"></i></a>} jengaButton={<a href="/postGame" className={`waves-effect waves-light btn-large col s3 valign-wrapper`}>JENGA!<i className="large material-icons"></i></a>} quitButton={<a href="/" className={`waves-effect waves-light btn-large col s3 valign-wrapper`}>QUIT<i className="large material-icons"></i></a>} />
    </>
  )
}

export default Gameplay;