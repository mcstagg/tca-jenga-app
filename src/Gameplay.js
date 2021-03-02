import React from 'react';
import Leader from './Leader';
import Game from './Game';

const Gameplay = () => {

  return (
    <>
      <Leader text="Gameplay" btnlink="./" btntext="Quit" column="col s3" button={<a href="/postGame" className={`waves-effect waves-light btn-large col s3 valign-wrapper`}>JENGA!<i className="large material-icons"></i></a>}/>
      <Game />
      <Leader text="Gameplay" btnlink="./" btntext="Quit" button={<a href="/postGame" className={`waves-effect waves-light btn-large col s3 valign-wrapper`}>JENGA!<i className="large material-icons"></i></a>} />
    </>
  )
}

export default Gameplay;