import React from 'react';
import Game from './Game';

const Gameplay = (props) => {

  return (

    <>
      {
        props.players.length >= 2
        && 
        <Game {...props}
        />
      }

      {
        props.players.length < 2 
        && 
        <h2>You need to set up the game...</h2>
      }
    </>
  )
}

export default Gameplay;