import React from 'react';
import Leader from './Leader';
import Game from './Game';
import GameBar from './GameBar';

const Gameplay = () => {

  return (
    <>
      <Leader text="Gameplay" btnlink="./postGame" btntext="JENGA!" />
      <Game />
      <GameBar />
    </>
  )
}

export default Gameplay;