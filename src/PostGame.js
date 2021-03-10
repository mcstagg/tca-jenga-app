import React from 'react';
import Leader from './Leader';
import Results from './Results';

const PostGame = () => {
  return (
    <>
      <Leader h4text="Post Game"  h4textcol="col s6 m6" moveButton={<a href="/gameplay" className={`waves-effect waves-light btn-large col s4 m3 valign-wrapper buttons deep-orange darken-1`}>Rematch<i className="material-icons"></i></a>} quitButton={<a href="/" className={`waves-effect waves-light btn-large col s4 m3 valign-wrapper buttons purple lighten-1`}>QUIT<i className="material-icons"></i></a>} />
      <Results />
      <Leader h4text="Rematch?" h4textcol="col s4 m6 offset-m1 pl-1" atts="rematch" moveButton={<a href="/gameplay" className={`waves-effect waves-light btn-large col s4 m3 offset-s1 valign-wrapper deep-orange darken-1 buttons`}>Rematch<i className="material-icons"></i></a>} quitButton={<a href="/" className={`waves-effect waves-light btn-large col s4 m3 valign-wrapper purple lighten-1 buttons`}>QUIT<i className="large"></i></a>} />
    </>
  )
}

export default PostGame;