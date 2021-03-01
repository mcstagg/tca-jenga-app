import React from 'react';
import Leader from './Leader';
import Game from './Game';
import GameBar from './GameBar';

const Gameplay = () => {

  return (
    <>
      <Leader text="Gameplay" btnlink="./gameplay" btntext="Make Move" />
      <Game />
      <Leader text="Gameplay" btnlink="./gameplay" btntext="Make Move" />
      <GameBar  text="Gameplay" btnlink="./postGame" btntext="JENGA!"/>
    </>
  )
}

export default Gameplay;