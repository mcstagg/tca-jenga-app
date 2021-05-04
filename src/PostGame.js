import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Results from "./Results";
import { Link } from 'react-router-dom';

const PostGame = ({ players, game }) => {
  return (
    <>
      <Header
        h4text="Post Game"
        h4textcol="col s6 m6"
        atts="lb-pad head-text"
        moveButton={
          <Link
            to="/gameSetup"
            className={`waves-effect waves-light btn-large col s4 m3 valign-wrapper buttons deep-orange darken-1 rematch-btn`}
          >
            Rematch
            <i className="material-icons"></i>
          </Link>
        }
        quitButton={
          <Link
            to="/"
            className={`waves-effect waves-light btn-large col s4 m3 valign-wrapper buttons purple lighten-1 rematch-btn`}
          >
            QUIT
            <i className="material-icons"></i>
          </Link>
        }
      />

      {
        game.moves.length > 0 
        && 
        <Results 
          players={players} 
          game={game} 
        />
      }

      <Footer
        h4text="Rematch?"
        h4textcol="col s6 m6"
        atts="rematch"
        att="mt-0"
        moveButton={
          <Link
            to="/gameplay"
            className={`waves-effect waves-light btn-large col s4 m3 valign-wrapper buttons deep-orange darken-1 rematch-btn`}
          >
            Rematch
            <i className="material-icons"></i>
          </Link>
        }
        quitButton={
          <Link
            to="/"
            className={`waves-effect waves-light btn-large col s4 m3 valign-wrapper buttons purple lighten-1 rematch-btn`}
          >
            QUIT
            <i className="material-icons"></i>
          </Link>
        }
      />
    </>
  );
};

export default PostGame;
