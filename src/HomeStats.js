import React from 'react';
import Leader from './Leader';
import Table from './Table';

const HomeStats = () => {

  return (
    <>
      <Leader h4text="Leaderboard" h4textcol="col s6 m9" atts="" moveButton={<a href="/gameSetup" className={`waves-effect waves-light btn-large col s6 m3 valign-wrapper purple lighten-1 buttons`}>PLAY JENGA!<i className="material-icons"></i></a>} />
      <Table className="container"/>
      <Leader h4text="Ready to Start?" h4textcol="col s9 m9" att="pl-0" atts="ready" moveButton={<a href="/gameSetup" className={`waves-effect waves-light btn-large col s4 m3 valign-wrapper purple lighten-1 buttons`}>PLAY JENGA!<i className="material-icons"></i></a>}/>
    </>
  )    
}   

export default HomeStats;