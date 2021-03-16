import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Results from './Results';

const PostGame = () => {
  return (
    <>
      <Header h4text="Post Game"  h4textcol="col s6 m6" atts="lb-pad" moveButton={<a href="/gameplay" className={`waves-effect waves-light btn-large col s4 m3 valign-wrapper buttons deep-orange darken-1 rematch-btn`}>Rematch<i className="material-icons"></i></a>} quitButton={<a href="/" className={`waves-effect waves-light btn-large col s4 m3 valign-wrapper buttons purple lighten-1 rematch-btn`}>QUIT<i className="material-icons"></i></a>} />
      <Results />
      <Footer h4text="Rematch?"  h4textcol="col s6 m6" atts="rematch" att="mt-0" moveButton={<a href="/gameplay" className={`waves-effect waves-light btn-large col s4 m3 valign-wrapper buttons deep-orange darken-1 rematch-btn`}>Rematch<i className="material-icons"></i></a>} quitButton={<a href="/" className={`waves-effect waves-light btn-large col s4 m3 valign-wrapper buttons purple lighten-1 rematch-btn`}>QUIT<i className="material-icons"></i></a>} />
    </>
  )
}

export default PostGame;