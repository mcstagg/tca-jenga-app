import React from 'react';
import Game from './Game';

const Gameplay = ({ moves, setMoves, players }) => {

  return (

    <>
      {
        players.length >= 2
        && 
        <Game moves={moves}
              setMoves={setMoves} 
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