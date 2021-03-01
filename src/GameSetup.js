import React from 'react';
import Leader from './Leader';
import SetupForm from './SetupForm';
import './App.css';

const GameSetup = () => {
  return (
    <>
      <Leader text="Game Setup" btnlink="./gameplay" btntext="Start Game" column="col s6" />
      <SetupForm />
      <Leader text="Prepare for Jenga!" btnlink="./gameplay" btntext="Start Game" att="pl-2" column="col s6" />
    </>
  )
}

export default GameSetup;