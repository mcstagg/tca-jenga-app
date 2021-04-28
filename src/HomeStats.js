import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Table from './Table';

const HomeStats = () => {

  return (
    <>
      <Header 
        h4text="Leaderboard" 
        h4textcol="col s6 m9" 
        atts="head-text" 
        moveButton={
          <a 
            href="/gameSetup" 
            className={
              `waves-effect waves-light btn-large col s6 m3 valign-wrapper purple lighten-1 buttons`
            }
          >
            PLAY JENGA!
          </a>
        } 
      />

      <Table className="container"/>

      <Footer 
        h4text="Ready to Start?" 
        h4textcol="col s8 m9" 
        att="mt-0" 
        atts="ready" 
        moveButton={
          <a 
            href="/gameSetup" 
            className={
              `waves-effect waves-light btn-large col s4 m3 valign-wrapper purple lighten-1 buttons`
            }
          >
            <i className="material-icons play">
              play_arrow
            </i>
          </a>
        }
      />
    </>
  )    
}

export default HomeStats;