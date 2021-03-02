import React from 'react';
import Leader from './Leader';
import Results from './Results';

const PostGame = () => {
  return (
    <>
      <Leader h4text="Post Game"  h4textcol="col s6" moveButton={<a href="/gameplay" className={`waves-effect waves-light btn-large col s3 valign-wrapper`}>Rematch!<i className="large material-icons"></i></a>} quitButton={<a href="/" className={`waves-effect waves-light btn-large col s3 valign-wrapper`}>QUIT<i className="large material-icons"></i></a>} />
      <Results />
      <Leader h4text="Rematch?" h4textcol="col s4" atts="pl-2" moveButton={<a href="/gameplay" className={`waves-effect waves-light btn-large col s3 offset-s2 valign-wrapper`}>Rematch!<i className="large material-icons"></i></a>} quitButton={<a href="/" className={`waves-effect waves-light btn-large col s3 valign-wrapper`}>QUIT<i className="large material-icons"></i></a>} />
    </>
  )
}

export default PostGame;