import React from 'react';
import Leader from './Leader';
import SetupForm from './SetupForm';

const GameSetup = () => {
  return (
    <>
      <Leader text="Game Setup" btnlink="./gameplay" btntext="Start Game" />
      <SetupForm />
      <Leader text="Prepare for Jenga!" btnlink="./gameplay" btntext="Start Game" />
    </>
  )
}

export default GameSetup;