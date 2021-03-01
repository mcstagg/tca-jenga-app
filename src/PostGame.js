import React from 'react';
import Leader from './Leader';
import Results from './Results';

const PostGame = () => {
  return (
    <>
      <Leader text="Post Game" btnlink="./gameplay" btntext="Play Again"/>
      <Results />
      <Leader text="Rematch?" btnlink="./gameplay" btntext="Play Again"/>
    </>
  )
}

export default PostGame;