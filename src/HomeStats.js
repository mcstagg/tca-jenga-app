import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Table from './Table';
import { Link } from 'react-router-dom';

const HomeStats = ({ gamesPlayed }) => {

  return (
    <>
      <Header 
        h4text="Leaderboard" 
        h4textcol="col s6 m9" 
        atts="head-text" 
        moveButton={
          <Link 
            to="/gameSetup" 
            className={
              `waves-effect waves-light btn-large col s6 m3 valign-wrapper purple lighten-1 buttons`
            }
          >
            PLAY JENGA!
          </Link>
        } 
      />

      <Table gamesPlayed={gamesPlayed} className="container"/>

      <Footer 
        h4text="Ready to Start?" 
        h4textcol="col s8 m9" 
        att="mt-0" 
        atts="ready" 
        moveButton={
          <Link
            to="/gameSetup" 
            className={
              `waves-effect waves-light btn-large col s4 m3 valign-wrapper purple lighten-1 buttons`
            }
          >
            <i className="material-icons play">
              play_arrow
            </i>
          </Link>
        }
      />
    </>
  )    
}

export default HomeStats;