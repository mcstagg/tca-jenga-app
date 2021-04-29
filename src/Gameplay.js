import React from 'react';
import Game from './Game';

const Gameplay = ({ game, setGame, players }) => {

  return (

    <>
      {
        players.length >= 2
        && 
        <Game game={game}
              setGame={setGame} 
              players={players}
        />
      }

      {
        players.length < 2 
        && 
        <h2>You need to set up the game...</h2>
      }
    </>
  )
}

export default Gameplay;